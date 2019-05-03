const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/Oauth');
const setup = require('./config/google');
const mongoose = require('mongoose');
const mgkey = require('./config/key');

const app = express();
const port = 3000;

const cookie = require('cookie-session');
const passport = require('passport');

app.use(cookie({
  maxAge:24*60*60*1000,
  keys:['123456']
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var cat = require('./routes/catApi');
app.use('/catApi', cat);

mongoose.connect(mgkey.mongodb.dbURL,()=>{
  console.log('mongodb');
});

app.use('/auth',authRoutes);

app.listen(port, () => {
  console.log('Connect on ' + port)});
