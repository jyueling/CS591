var express = require('express');
var router = express.Router();

//POST
router.post('/cpost', function(req, res, next) {
  res.send(req.body);
});


module.exports = router;
