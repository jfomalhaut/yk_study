import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import List from './routers/List';
import Home from './routers/Home';
import Navigation from './components/Navigation';

function App() {
	const title = "Start!";
	return (
		<Router>
			<Navigation title={title} />
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/list/:name" component={List} />
				<Redirect to="/home" />
			</Switch>
		</Router>
	);
};

export default App;