var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
        uri: 'https://aws.random.cat/meow'},
      function (error,response,body) {
        //res.body = JSON.parse(body);
        const output = JSON.parse(body);
        //res.render('index', { title:'Meow',content: body});
        res.send(output)
      });
  //res.send('respond with a resource');

});
module.exports = router;
