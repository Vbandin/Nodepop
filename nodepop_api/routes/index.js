var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'NodePop',
  	parrafo: '<p> EJS lo protege</p>',
  	sinEscapar: '<p>sin escapar</p>', 
  });
});

module.exports = router;
