var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About this Page', 
  pageText1:'About Me',
  var:'This about my page'
 });
});

router.get ('/', function(req,res,next) {
  res.render('index',{pageText:'About Me'});
});


module.exports = router;
