var express = require('express');
var router = express.Router();

//GET

router.get('/bget', function(req, res,next) {
  res.send(JSON.stringify({ string: 'HW1!' }));
});

module.exports = router;
