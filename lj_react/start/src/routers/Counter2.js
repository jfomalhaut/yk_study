import React, { useReducer } from 'react';

const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';

const CounterReducer = (state, action) => {
	switch(action.type) {
		case INCREASEMENT: {
			return state + 1;
		}
		case DECREASEMENT: {
			return state - 1;
		}
		default: {
			return state;
		}
	}
};

function Counter2() {
	const [count, dispatch] = useReducer(CounterReducer, 0);

	const increasement = () => {
		dispatch({ type: INCREASEMENT });
	};

	const decreasement = () => {
		// setCount(count - 1);
	};

	return (
		<>
			<h1>Count: {count}</h1>
			<div>
				<button onClick={increasement}>increasement</button>
				<button onClick={decreasement}>decreasement</button>
			</div>
		</>
	)
};

export default Counter2;