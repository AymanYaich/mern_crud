import React from 'react';
//import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';

const Dashboard = (props) => {
    
	const logOut = (event) => {
		event.preventDefault();
		props.logoutUser();
	};
	return (
		<div>
			<h1>You are logged</h1>
			<h1>{props.auth.user.email}</h1>
			<h1>your name is {props.auth.user.fullname}</h1>

			<h1>You are logged</h1>

			<button type="submit" onClick={logOut}>
				Log Out
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	error: state.error
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Dashboard));
