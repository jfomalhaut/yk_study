import React, { useReducer } from 'react';

const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';

const onIncreasement = () => ({ type: INCREASEMENT });
const onDecreasement = () => ({ type: DECREASEMENT });

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
		dispatch(onIncreasement());
	}; 

	const decreasement = () => {
		dispatch(onDecreasement());
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