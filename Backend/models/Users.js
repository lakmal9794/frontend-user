const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    nic:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Users',userSchema);