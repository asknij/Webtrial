var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About this Page', 
  aboutme:"My name is Ananthu Santhosh . I am from Kerala. I have just finished my college.I had been a student Viswajyothi College. Now i moved to Canada to continue with my studiesin Conestoga college. I'm eagerly looking forward to being in a new place and attending a new institution. This is the start of a new chapter in my life. In the three or four years leading up to my graduation, I am looking forward to making new friends, acquiring new skills, and expanding my horizons, as well as having fun and enjoying my college experience.",
  hobbie:' I enjoy outdoor activities such as reading, drawing, and photography and editing. I enjoy visiting new, lesser-known locations since it broadens my understanding of my country and allows me to pursue my passion for photography.',
  aboutmetext:'About Me',
  hobbietext:'Hobbies'
 
});
});

router.get ('/', function(req,res,next) {
  res.render('index',{pageText:'This Is Me',
education:'Bachelor of Technology in Computer Science and Engineering. CUrrently persuing Post graduation.',
skills:'Good insight on logical thinking and Programming. Along with drawing skills.',
family:'Indian citizen with family containing 5 members.',
future:'Looking forward to establishing a start up in home country.'});
});


module.exports = router;
