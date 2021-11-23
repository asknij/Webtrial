var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req,res,next) => {
  res.render('contact',{
    info:'Usually available from Monday to friday 8 AM to 7 PM. Feel free to contact during that time after that please leave me an email and i will reply as soon as possible.'
  });
});

module.exports = router;
