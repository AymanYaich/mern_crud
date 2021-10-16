import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import Add from './components/add';
import AllMember from './components/allMemebers';
import Home from './components/home';
import Navigation from './components/navbar';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashbord';
import PrivateRoute from './components/privateRoute';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
  // Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());
	  // Redirect to login
	  window.location.href = "./login";
	}
  }

function App() {
	return (
    <Provider store={store}>
		<BrowserRouter>
			<Navigation />
			
				<Route path="/" component={Home} exact />
				<Route path="/add" component={Add} />
				<Route path="/custumers" component={AllMember} />
				<Route path="/register" component={Register}/>
				<Route path="/login" component={Login}/>
				<Switch>
				<PrivateRoute path="/dashboard" component={Dashboard}/>
				
			</Switch>
	    <Footer/>
	</BrowserRouter>
	</Provider>
   
	);
}

export default App;
