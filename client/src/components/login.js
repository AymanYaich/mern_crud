import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

	const[email,setEmail]=useState("");

	const[password,setPassword]=useState("");

	const sendToVerify = (event)=> {
		
		axios.post("http://localhost:5000/user/login",{email,password}).then((data)=>{
			console.log(data)
		}).catch(err=>{
			console.log(err)
		})
		event.preventDefault();
	}
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder="email"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
					/>
				</Form.Group>
				<Button variant="primary" type="submit" onClick={sendToVerify}>
					Login
				</Button>
			</Form>
		</div>
	);
}
