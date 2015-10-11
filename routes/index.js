var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vozrecord', function(req, res, next) {
  res.render('voz', { title: 'Voz' });
});

module.exports = router;
