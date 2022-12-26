const express = require('express');
const path = require('path');
const adminController = require('../controller/adminController');

const router = express.Router();


router.get("/login",(req,res,next)=>{
    //console.log("login page...");
    //res.sendFile(path.join(__dirname,'..','views','register.html'))
    res.sendFile(path.join(__dirname,'..','views','login.html'));
  });

router.post('/',adminController.user_login);


module.exports =  router;
