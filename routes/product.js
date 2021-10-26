const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const multer = require('multer');
const cloudinary = require('cloudinary');

//Multer configuration

const storage = multer.diskStorage({
	filename: function(req, files, callback) {
		callback(null, Date.now() + files.originalname);
	}
});

//Filter only accepted image types
//her we used the regEX
const imageFilter = function(req, files, cb) {
	// accept image files only
	if (!files.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
		return cb(new Error('Only image files are accepted!'), false);
	}
	cb(null, true);
};
const upload = multer({ storage: storage });
//cloudinary config
cloudinary.config({
	cloud_name: 'dfk4ziwuk',
	api_key: '342116342598274',
	api_secret: 'K1Knp_9qGdTFKtJX3Z6zjdaaqiA'
});

//
;

router.post('/add', upload.single('image'), (req, res) => {
	cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
		if (err) {
			res.json(err);
		} else {
			req.body.image = result.secure_url;
			//req.body.imageId = result.public_id;

			Product.create(
				{
					category: req.body.category,
					name: req.body.name,
					price: req.body.price,
					description: req.body.description,
					image: req.body.image
				},
				function(err, doc) {
					if (err) {
						res.json(err.message);
					} else {
						res.json({
							success: true,
							data: doc
						});
					}
				}
			);
		}
	});
});

//Creating new data CRUD : Create

//	reading data (CRUD , R:Read)

router.get('/read', (req, res) => {
	Product.find({}, (err, products) => {
		res.json(products);
	}).catch((err) => {
		console.log(err);
	});
});

router.delete('/deleteOne', (req, res) => {
	Product.findOneAndRemove({ _id: req.query._id }, (err, member) => {
		if (err) {
			console.log(err);
		} else {
			res.json(200, { success: true, deleted: member });
		}
	});
});


//upload one photo in order to update the photo

router.put('/updateAll', upload.single('image'), (req, res) => {

	cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			const image = result.secure_url||"";
			const {name ,price,description,category}=req.body
			
		   Product.findOneAndUpdate({ _id:req.query._id }, {name,price,description,category,image },{useFindAndModify: false}, (err, result) => {
				if (err) {
					console.log(err);
				} else {
					console.log("res",result);
				}
			});
		}
	});
});

router.put('/updateNoImg',(req,res)=>{
	const{name,price,description,category}=req.body;
	Product.findOneAndUpdate({_id:req.query._id},{name,price,description,category},(err,result)=>{
		if(err){
			console.log(err)
		}else{
			console.log(result)
		}
	})
})

module.exports = router;
