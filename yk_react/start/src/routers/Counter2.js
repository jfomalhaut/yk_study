import React, { useState, useEffect, useReducer } from 'react';

const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';
const ADD_CUSTOM = 'ADD_CUSTOM';

const CounterReducer = (state, action) => {
    /*if( isNaN(action.addVal) ){
        alert('숫자만 입력해주세요.');
        let regex = /[^0-9]/g;
        let result = action.addVal.replace(regex, "");
    } else {*/
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
    //}
};

function Counter2(){
    const [count, dispatch] = useReducer(CounterReducer, 0);
    const [addVal, setAddVal] = useState(0);

    const increasement = () => {
        dispatch({ type: INCREASEMENT });
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