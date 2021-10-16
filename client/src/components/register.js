import React from 'react';
import {useState} from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {Form , Button} from 'react-bootstrap';
import withRouter from 'react-router-dom';
import registerUser from '../actions/authActions'

import axios from 'axios';

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

export default function Register() {
  
  const[fullname,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[retypedPassWord,setRetypedPassword]=useState("");

const sendToDB =(event)=>{
  if (retypedPassWord===password){
    axios.post("http://localhost:5000/user/add",{fullname,email,password}).then(addedUser=>{
      console.log(addedUser)
    }).catch(err=>{
      console.log(err)
    })
  }else{
    alert("not matched password!!!!")
  }
  event.preventDefault();
}

	return (
		<div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text"
           value={fullname}
           onChange={e=>{setName(e.target.value)}} 
           placeholder="please type your name" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
            placeholder="please type your email"
            value={email}
            onChange={e=>{setEmail(e.target.value)}} />
          
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
          value={password}
          onChange={e=>{setPassword(e.target.value)}}
          placeholder="pleae type your password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Retype password</Form.Label>
        <Form.Control type="password"
        value={retypedPassWord}
        onChange={e=>{setRetypedPassword(e.target.value)}}
        placeholder="please retype your password" />
      </Form.Group>
        <Button variant="primary" type="submit" onClick={sendToDB}>
          Submit
        </Button>
      </Form>
		</div>
	);
}
