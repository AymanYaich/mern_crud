import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';


export const registerUser = (userData, history) => (dispatch) => {
	axios
		.post('http://localhost:5000/user/add', userData)
		.then((res) => history.push('/login')) // re-direct to login on successful register
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

/////

export const loginUser = (userData) => (dispatch) => {
	axios
		.post('http://localhost:5000/user/login', userData)
		.then((res) =>{
      const {token}=res.data;
      localStorage.setItem("jwtToken",token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded))
     console.log(decoded)
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
  
};

// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

export const setUserLoading = () => {
	return {
		type: USER_LOADING
	};
};

//log user out
export const logoutUser = () => (dispatch) => {
	// Remove token from local storage
	localStorage.removeItem('jwtToken');
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
