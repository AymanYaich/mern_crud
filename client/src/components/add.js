import React from 'react';
import { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllMember from './allMemebers'
import axios from 'axios';


export default function Add() {

	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState('');
	const [job,setJob]= useState(false)
	const [image,setImage]=useState()
	const [showList,setShowList]=false
	useEffect(()=>{
		console.log("titl")
	},[])
    
	const sendToDB = (event) => {
		const formData = new FormData();
		formData.append("name",name);
		formData.append("age",age);
		formData.append("job",job);
       formData.append("image",image)
        
	    axios.post(`https://obscure-dawn-57110.herokuapp.com/custumer/add`,formData).then((data)=>{
			console.log(data)
		})
		console.log("formData",...formData)
			event.preventDefault();
		
	};

	const readDB = (event) => {
	   setShowList(true)
	   event.preventDefault();	
	};

	const clearAll = (event) => {
		setShowList(false)
		event.preventDefault();	
	 };
	 
    
	return (
		<div className="register-form">
			<Form  encType="multipart/form-data" >
			
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Customer Name</Form.Label>
					<Form.Control
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
					/>
				</Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Age</Form.Label>
					<Form.Control
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						placeholder="Enter your age"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Job</Form.Label>
					<Form.Control
						type="text"
						value={job}
						onChange={(e) => setJob(e.target.value)}
						placeholder="Enter your job"
					/>
				</Form.Group>
				
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Image</Form.Label>
					<Form.Control
						type="file"
						
						onChange={(e)=>{setImage(e.target.files[0])}}
						
					/>
				</Form.Group>
				<div class="mb-3">
				<label for="formFileSm" class="form-label">Small file input example</label>
				<input class="form-control form-control-sm" id="formFileSm" type="file"/>
			  </div>
				<Button variant="primary" type="submit" onClick={sendToDB}>
					Submit
				</Button>
				<Button variant="primary" type="submit" onClick={readDB}>
					Read
				</Button>
			</Form>
			<div>
			{
				showList?<div><AllMember/><button onClick={clearAll}>kkk</button></div>:null
			}
			</div>
				
		</div>
	);
}
