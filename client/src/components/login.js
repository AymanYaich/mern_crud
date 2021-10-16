import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import {loginUser} from '../actions/authActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {withRouter} from 'react-router-dom';



const  Login=(props)=> {
    useEffect(()=>{
        if(props.auth.isAuthenticated){
			props.history.push("/dashboard")
		}
	})
	const[email,setEmail]=useState("");

	const[password,setPassword]=useState("");

	const sendToVerify = (event)=> {
		event.preventDefault();
		props.loginUser({email,password})
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
};

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
  };


const mapStateToProps=state=>({
	auth:state.auth,
	error:state.error
})

export default  connect(
 mapStateToProps,
 {loginUser}
)(withRouter(Login))
