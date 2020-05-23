const express = require('express');
const homecontroller = require('../controller/homecontroller');

const router = express.Router();

//all functions of following routes are in homecontroller of controller

router.get('/', homecontroller.getlivestat);
router.get('/cover', homecontroller.cover);

router.post('/protect', homecontroller.protector);
router.post('/tokencheck', homecontroller.tokencheck)
router.get('/home', homecontroller.getpage);
router.get('/livestat', homecontroller.getlivestat);
router.get('/totaldata', homecontroller.gettotal);
router.get('/worlddata', homecontroller.getcountrydata);
router.get('/statedata', homecontroller.statedata);



router.post('/signup', homecontroller.signup_post);
router.get('/signup', homecontroller.signup);
router.get('/users/verifyemail/:token', homecontroller.verifyemail);
router.get('/helpline', homecontroller.helpline);
router.get('/hospitals', homecontroller.hospitals);

router.post('/forgotpassword', homecontroller.forgotpassword);  //also change in id of forgotpassword of ejs and index.js
router.get('/users/resetPassword/:token', homecontroller.resetpassword);
router.post('/users/resetPassword/:token', homecontroller.changepassword);

router.get('/buyer/:token', homecontroller.buy);
router.get('/buyertab', homecontroller.buyertab);
router.get('/sellertab', homecontroller.sellertab);
router.get('/myOrder', homecontroller.myOrder);
router.post('/getinfo', homecontroller.getinfo);
router.post('/getdataofproduct', homecontroller.getdataofproduct);
router.post('/itemform', homecontroller.Itemform);  //user submit their requiremeint form here
router.post('/bookproduct', homecontroller.bookproduct);
router.post('/getMyOrder', homecontroller.getMyOrder);
router.post('/liveData', homecontroller.liveData);
module.exports = router;