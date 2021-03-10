import React from 'react';

function List({ match: { params: { name } } }) {
	return (
		<h1>List Component: {name}</h1>
	);
};

export default List;
