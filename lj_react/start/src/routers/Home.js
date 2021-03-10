import React from 'react';

function Home ({ history }) {
	const goList = () => {
		history.push('/list/리그오브레전드');
	};

	return (
		<div>
			<h1>Home Component</h1>
			<button onClick={() => goList()}>리스트</button>
		</div>
	);
};

export default Home;
