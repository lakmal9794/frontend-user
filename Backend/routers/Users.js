const express = require('express');
const Users = require('../models/Users');

const router = express.Router();
//create user
router.post('/user/save', (req,res)=>{
    let newUser = new Users(req.body);
    newUser.save((err)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({success:"User Saved Successful"})
    });
});
//Get uders
router.get('/user',(req,res)=>{
    Users.find().exec((err,Users)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:true,
            existingUsers:Users
     });
    });
})

router.get('/user/:id',(req,res)=>{
    let userId = req.params.id;
    Users.findById(userId,(err,user)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:true,
            user
     });
    })
})

module.exports = router;