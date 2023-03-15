const express = require('express');

const mongoose= require('mongoose');

const User= require("./User");
/*
const session =  require('express-session');
*/
const app = express();
app.post("/login",async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const cmail = await User.findOne({
            email: email
        });
        console.log(cmail);
    } catch (error) {
        
    }
});

app.post("/signup",async(req,res)=>{
    try {
        const user= new User({
            email: req.body.email,
            password:req.body.password,
            address: req.body.address,
            city :req.body.city,
            
            zip: req.body.zip
        });
       
       const create = await user.save();

       console.log(create);
      
        
    } catch (error) {
        
    }
});
const port = 5000;
require('./db.js');
app.listen(port,()=>{
    console.log("running");
});

