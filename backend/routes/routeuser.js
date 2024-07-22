const express = require('express');
const router = express.Router();
const userData = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/adduser', 
    [
        body('userEmail',"Invalid email").isEmail(),
        body('userPasscode',"Incorrect Password").isLength({min:5}),
        body('userName', "Name will be atleast 5 character").isLength({min:5}),
        body('userPhone', "Incorrect Phone Number").isLength({min:10})
    ]
    ,async (req,res)=>{

        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }


    try{
       await userData.create({
            userName: req.body.userName,
            userPhone: req.body.userPhone,
            userPasscode: req.body.userPasscode,
            userEmail: req.body.userEmail,
            userLocation: req.body.userLocation
        })
        res.json({success:true});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }
});


// route.get('/user');
// route.post('/product');


module.exports = router;
