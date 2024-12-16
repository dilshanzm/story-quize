var express = require('express');
var router = express.Router();
var storyController = require('../controllers/story/story');


const dotenv = require('dotenv')
dotenv.config();


router.post('/call-back', storyController.callbackURL);
module.exports = router;
