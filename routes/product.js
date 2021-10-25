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
router.post('/adds', upload.single('image'), (req, res) => {
	cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
		if (err) {
			res.json(err);
		} else {
			req.body.image = result.secure_url;
		}
	});
	let sendData = {
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		image: req.body.image
	};
	Product.create(sendData, (err, data) => {
		console.log(sendData);
		if (err) {
			res.status(400).json({ success: false, err });
			console.log(err);
		} else {
			res.status(200).json({
				success: true,
				Product: data
			});
			console.log(data);
		}
	});
});

router.post('/add', upload.single('image'), (req, res) => {
	cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
		if (err) {
			res.json(err);
		} else {
			req.body.image = result.secure_url;
			// add image's public_id to image object
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
router.put('/updateName', (req, res) => {
	Product.findOneAndUpdate({ name: req.query.name }, { name: req.body.name }, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
});

router.put('/updateAll', (req, res) => {
	const { category , name , price , description } = req.body;
	const updatedData = { name , price ,description , category}
	Product.findOneAndUpdate({ _id: req.query._id }, updatedData, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
})



module.exports = router;
