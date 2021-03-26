const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_TO_CART = 'REMOVE_TO_CART';
const DELETE_TO_CART = 'RELETE_TO_CART';

const addToCart = (item) => ({ type: ADD_TO_CART, item });
const removeToCart = (item) => ({ type: REMOVE_TO_CART, item });
const deleteToCart = (item) => ({ type: DELETE_TO_CART, item });

export default {
    ADD_TO_CART,
    addToCart,
    REMOVE_TO_CART,
    removeToCart,
    DELETE_TO_CART,
    deleteToCart
}