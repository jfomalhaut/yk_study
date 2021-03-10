import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ title }) {
	return (
		<header>
			<h1>{title}</h1>
			<ul>
				<li>
					<Link to="/home">HOME</Link>
				</li>
				<li>
					<Link to="/list/배그">LIST</Link>
				</li>
			</ul>
		</header>
	);
};

export default Navigation;