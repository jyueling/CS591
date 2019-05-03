const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const googleKey = require('./key');
const User = require('../routes/userMg')

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/callback',
        clientID: googleKey.google.clientID,
        clientSecret: googleKey.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //console.log(profile);
        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                done(null,currentUser);
            }
            else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser)=>{
                    console.log('new user'+ newUser);
                    done(null,newUser);
                })
            }
        })

    })
)

