import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import List from './routers/List';
import Product from './routers/Product';
import Home from './routers/Home';
import Navigation from './components/Navigation';

function App() {
	const title = "Start!";
	return (
		<Router>
			{/* <Navigation title={title} /> */}
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/product/:type" component={Product} />
				<Route path="/list/:name" component={List} />
				<Redirect to="/product/all" />
			</Switch>
		</Router>
	);
};

export default App;