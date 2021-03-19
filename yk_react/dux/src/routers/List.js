import React from 'react';
import { useDispatch } from 'react-redux';
import { CartAction } from '../actions';

function List(){
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(CartAction.addToCart());

    };

    return (
        <div>
        <button onClick={addToCart}>담기</button>
        </div>
    );
}

export default List;
