import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllMember from './allMemebers'
import axios from 'axios';
//import axios from 'axios';

export default function Add() {
	
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState();
	const [ job, setJob ] = useState('');
	const [showList,setShowList]= useState(false)
	const [image,setImage]=useState()
    
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
		window.location.reload(false);
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
		<div>
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
						value={image}
						onChange={(e)=>{setImage(e.target.files[0])}}
						
					/>
				</Form.Group>

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
