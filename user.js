
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({

            email: String,
            password:String,
            address:String,
            city :String,
            
            zip: Number
    });

    const User=  new mongoose.model("User",userSchema) ;

    module.exports = User;

    