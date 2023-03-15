const mongoose = require('mongoose');

const db = 'mongodb+srv://dritam440:bydtv0oW30q4p1Sa@cluster0.hyuua2t.mongodb.net/db?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>{
    console.log("connected with data base");
});