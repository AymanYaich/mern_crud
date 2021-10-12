const express = require ('express');
const router = express.Router();
const Custumer = require('../models/customer');


//Creating new data CRUD : Create

router.post('/create',(req,res,next)=>{

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