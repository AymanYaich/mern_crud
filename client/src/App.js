import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './components/add';
import AllMember from './components/allMemebers';
import Home from './components/home';
import Navigation from './components/navbar';
import Footer from './components/footer';
function App() {
	return (
    
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/add" component={Add} />
				<Route path="/custumers" component={AllMember} />
			</Switch>
	    <Footer/>
    </BrowserRouter>
   
	);
}

export default App;
