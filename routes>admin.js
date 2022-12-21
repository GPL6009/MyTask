const express = require('express');
const path = require('path');

const adminController = require('../controller/adminController');

const router = express.Router();

router.get('/',(req,res,next)=>{
  //res.sendFile(path.join(__dirname,'..','views','register.html'))
  res.sendFile(path.join(__dirname,'..','views','register.html'));
});


router.post('/register',adminController.add_user);

module.exports =  router;
 
