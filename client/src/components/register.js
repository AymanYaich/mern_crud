import React from 'react';
import {useState} from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {Form , Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {registerUser} from '../actions/authActions'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';




const  Register=(props)=> {
  
  const[fullname,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[retypedPassWord,setRetypedPassword]=useState("");
 // const[erros,setErrors]= useState({});



const sendToDB =(event)=>{
  event.preventDefault();
  if (retypedPassWord===password){
   props.registerUser({fullname,email,password},props.history)
  }else{
    alert("not matched password!!!!")
  }
  
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
