var router = require('express').Router();
var passport = require('passport');

router.get('/logout',function(req,res,next){
    req.logout();
    //res.render('index',{user: req.user});
});

router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

router.get('/google/callback',passport.authenticate('google'), (req,res)=>{
    res.send(req.user);
});
module.exports = router;

