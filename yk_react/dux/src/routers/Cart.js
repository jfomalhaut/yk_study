import React from 'react';
import { useSelector } from 'react-redux';


function Cart(){
    const cart = useSelector(({ cart }) => cart.cart );

    return (
        <div>
            <ul>
                {cart.map(item => (
                    <li>
                        <span>{item.name}</span>
                        <span>{item.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
