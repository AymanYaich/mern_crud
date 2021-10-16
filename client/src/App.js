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
function App() {
	return (
    <Provider store={store}>
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/add" component={Add} />
				<Route path="/custumers" component={AllMember} />
				<Route path="/register" component={Register}/>
				<Route path="/login" component={Login}/>
			</Switch>
	    <Footer/>
	</BrowserRouter>
	</Provider>
   
	);
}

export default App;
