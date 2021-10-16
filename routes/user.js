const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secretKey=require('../config/keys').secretOrKey
//Route add new user

router.post('/add', (req, res) => {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(req.body.password, salt, (err, hashedPassWord) => {
			let newUser = {
				fullname: req.body.fullname,
				email: req.body.email,
				password: hashedPassWord
			};
			User.create(newUser, (err, data) => {
				if (err) {
					console.log(err);
				} else {
					res.json({
						success: true,
						data: data
					});
					console.log('addedUser', data);
				}
			});
		});
	});
});

//Show users

router.get('/read', (req, res) => {
	User.find({}, (err, data) => {
		res.json({
			success: true,
			data: data
		});
	}).catch((err) => {
		console.log(err);
	});
});
// routes for login

router.post('/login', (req, res) => {

	User.findOne({ email: req.body.email }, (err, data) => {
		if (!data) {
			res.status(200).json({success:false,error:"not matched password"})
			
		} else {
			bcrypt.compare(req.body.password, data.password, (err, isMatch) => {
				if (err) {
					console.log(err);
				} else {
					if (!isMatch) {
						res.status(401).json({ msg: 'invalid password' });
						console.log('invalid password');
					} else {
						
                       // console.log('valid password');
                        const payload={
							id:data._id,
							fullname:data.fullname,
                            email:data.email
                        };
                        jwt.sign(payload,secretKey,{
                            expiresIn:31556926 
                        },
                        (err,token)=>{
                          if(err){
                              console.log(err)
                          }else{
                             res.json({
								 success:true,
								 token:token
							 })
                             console.log(token)
                          }
                        })

                    }
				}
			});
        }
        

	});
});

module.exports = router;
