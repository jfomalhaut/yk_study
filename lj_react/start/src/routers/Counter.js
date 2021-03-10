import React, { useEffect, useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	const increasement = () => {
		setCount(count + 1);
	};

	const decreasement = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		const arr = String(count).split('').map((item) => ((item * 1) % 3 === 0 ? '짝' : ''));

		if (arr.indexOf('짝') === -1) {
			console.log(count);
		} else {
			const str = arr.join('');
			console.log(str);
		}
	}, [count]);

	// useEffect(() => {
	// 	setCount(100);
	// }, []);

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={increasement}>increasement</button>
			<button onClick={decreasement}>decreasement</button>
		</div>
	)
}

export default Counter;