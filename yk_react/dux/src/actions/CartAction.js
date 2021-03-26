const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_TO_CART = 'REMOVE_TO_CART';
const DELETE_TO_CART = 'RELETE_TO_CART';
const CHECK_CART_ITEM = 'CHECK_CART_ITEM';

const addToCart = (item) => ({ type: ADD_TO_CART, item });
const removeToCart = (item) => ({ type: REMOVE_TO_CART, item });
const deleteToCart = (item) => ({ type: DELETE_TO_CART, item });
const checkCartItem = (item) => ({ type: CHECK_CART_ITEM, item });

export default {
    ADD_TO_CART,
    addToCart,
    REMOVE_TO_CART,
    removeToCart,
    DELETE_TO_CART,
    deleteToCart,
    CHECK_CART_ITEM,
    checkCartItem
}