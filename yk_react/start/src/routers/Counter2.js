import React, { useState, useEffect, useReducer } from 'react';

const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';
const ADD_CUSTOM = 'ADD_CUSTOM';

const onIncreasement = () => ({ type: INCREASEMENT });
const onDecreasement = () => ({ type: DECREASEMENT });

const CounterReducer = (state, action) => {
    switch (action.type) {
        case INCREASEMENT:
            return state + 1;
        
        case DECREASEMENT:
            return state - 1;

        case ADD_CUSTOM:
            return Number(state) + Number(action.addVal);

        default: {
            return state;
        }
    }
};

function Counter2(){
    const [count, dispatch] = useReducer(CounterReducer, 0);
    const [addVal, setAddVal] = useState(0);

    const increasement = () => {
        dispatch(onIncreasement());
    }
    
    const decreasement = () => {
        dispatch({ type: DECREASEMENT });
    }

    const addCustom = () => {
        dispatch({ type: ADD_CUSTOM, addVal: addVal })
    }

    const onChangeValue = (ev) => {
        const { target: { value } } = ev;
        setAddVal(value);
    }

    return (
        <>
            <h1>Count: {count}</h1>

            <div>
                <input value={addVal} onChange={onChangeValue} />
                <button onClick={increasement}>increasement</button>
                <button onClick={decreasement}>decreasement</button>
                <button onClick={addCustom}>addCustom</button>
            </div>
        </>
    )
};

export default Counter2;