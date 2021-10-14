const express = require ('express');
const router = express.Router();
const Custumer = require('../models/customer');
const multer = require('multer');
const cloudinary = require('cloudinary');

//Multer configuration

const storage = multer.diskStorage({
	filename: function(req, files, callback) {
	callback(null, Date.now() + files.originalname);
	}
	});
	const imageFilter = function(req, files, cb) {
	// accept image files only
	if (!files.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
	return cb(new Error("Only image files are accepted!"), false);
	}
	cb(null, true);
	};
	const upload = multer({ storage: storage });
//cloudinary config
	cloudinary.config({
		cloud_name: "dfk4ziwuk", 
		api_key: "342116342598274", 
		api_secret: "K1Knp_9qGdTFKtJX3Z6zjdaaqiA"
		});


  router.post("/add",upload.single('image'),(req,res)=>{
	  cloudinary.v2.uploader.upload(req.file.path,function(err,result){
        if(err){
			res.json(err)
		}else{
			req.body.image=result.secure_url;
			//req.body.imageId = result.public_id
		}
	  })
	  Custumer.create(req.body,(err,data)=>{
		if(err){
			res.status(400).json({success:false,err});
			console.log(err)
		}else{
			res.status(200).json({
				success:true,
				custumer:data
			})
		}
	})
  })

//Creating new data CRUD : Create

router.post('/creates',(req,res,next)=>{
 console.log("req.body",req.body)
  Custumer.create(req.body,(err,data)=>{
	  if(err){
		  res.status(400).json({success:false,err});
		  next(err);
	  }else{
		  res.status(200).json({
			  success:true,
			  custumer:data
		  })
	  }
  })
})

//	reading data (CRUD , R:Read)

router.get('/read',(req,res)=>{
Custumer.find({},(err,members)=>{
		res.json(members)
	}).catch(err=>{
		console.log(err)
	})
})

router.delete('/deleteOne',(req,res)=>{
	Custumer.findOneAndRemove({_id:req.query._id},(err,member)=>{
        if(err){
			console.log(err)
		}else{
			res.json(200,{success:true,deleted:member})
		}
	})
})
router.put('/updateName',(req,res)=>{
   
    Custumer.findOneAndUpdate({name:req.query.name}, {name:req.body.name},(err,result)=>{
       
        if(err){
            console.log(err)
        }else{
          console.log(result)
        }
    })
})


module.exports = router;