import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import { Cart, Detail, List, Login } from './rotuers';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Container>
				<Route path="/list" component={List} />
				<Route path="/detail" component={Detail} />
				<Route path="/cart" component={Cart} />
				<Route path="/login" component={Login} />
			</Container>
		</BrowserRouter>
	);
}

export default App;

const Container = styled.main`
	padding-top: 100px;
	min-height: 300vh;
`;

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0; padding: 0;
	}
	li {
		list-style: none;
	}
`;