var express = require('express');
var router = express.Router();
var Request = require('request');

const CatData = () => {
    return new Promise(function (resolve, reject) {
        var url = 'https://aws.random.cat/meow';
        Request.get(url, (error, response, body) => {
            resolve(JSON.parse(body));
        });
    });
};
router.get('/', function(req, res, next) {
    CatData()
        .then((value) => {
            res.send( value );
        });
})

module.exports = router;
