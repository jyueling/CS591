const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSche = new Schema({
    username: String,
    googleId: String
})

const UserMg = mongoose.model('user',userSche);

module.exports = UserMg;
