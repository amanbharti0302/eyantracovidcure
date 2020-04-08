const express = require('express');
const homecontroller = require('../controller/homecontroller');

const router = express.Router();

//all functions of following routes are in homecontroller of controller

router.get('/', homecontroller.cover);

router.post('/protect', homecontroller.protector);
router.post('/tokencheck', homecontroller.tokencheck)
router.get('/home', homecontroller.getpage);
router.get('/livestat', homecontroller.getlivestat);
router.get('/totaldata', homecontroller.gettotal);

router.post('/signup', homecontroller.signup_post);
router.get('/signup', homecontroller.signup);
router.get('/helpline', homecontroller.helpline);
router.get('/hospitals', homecontroller.hospitals);

module.exports = router;