import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import AddProduct from './components/addProuct'
import AllMember from './components/allMemebers';
import Home from './components/home';
import Navigation from './components/navbar';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashbord';
import PrivateRoute from './components/privateRoute';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Check for token to keep user logged in
if (localStorage.jwtToken) {

	const token = localStorage.jwtToken;
	setAuthToken(token);
	const decoded = jwt_decode(token);
	store.dispatch(setCurrentUser(decoded));
	const currentTime = Date.now() / 1000; 
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = './login';
	}
}

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
			
				<Navigation />

				<Route path="/" component={Home} exact />
				<Route path="/add" component={AddProduct} />
				<Route path="/custumers" component={AllMember} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Switch>
					<PrivateRoute path="/dashboard" component={Dashboard} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
