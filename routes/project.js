const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('Projects/index',{
        Android:'Android Applications Development   :   I am particularly intrested in Android applications development and i had worked a few years in that platform.',
        Deep:'Machine Learning   :   I have a few months experience assisting one of my friend in a deep learning project and it is an area in which i like to have some knowledge in.',
        Web:'Web Development   :   In this mordern world wbe development shows a promising future and hence i am intrested in web applications development.',
        Digital:'Digital Marketing   :   One of the main marketing strategies of the mordern era and with a bright opportunity for development in the near future.'
    });
});

module.exports = router