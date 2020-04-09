const express = require('express');
const homecontroller = require('../controller/homecontroller');

const router = express.Router();

//all functions of following routes are in homecontroller of controller

router.post('/login',homecontroller.logincheck);




module.exports = router;