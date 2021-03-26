import { CartAction } from '../actions';

const { ADD_TO_CART, REMOVE_TO_CART, DELETE_TO_CART, CHECK_CART_ITEM } = CartAction;
//const { REMOVE_TO_CART } = CartAction;
//const { ADD_TO_CART } = CartAction;

const initialState = {
    //cart: []
    cart: [
        {
            "id": 1,
            "name": "영광굴비",
            "price": 12500,
            "src": "https://img-cf.kurly.com/shop/data/goods/1584496590885l0.jpg",
            "check": false,
            "count": 1
        },
        {
            "id": 2,
            "name": "도다리 2종",
            "price": 13890,
            "src": "https://img-cf.kurly.com/shop/data/goods/1552887814245l0.jpg",
            "check": false,
            "count": 2
        }
    ]
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            const flag = state.cart.map(item => item.id).indexOf(action.item.id);

            return {
                ...state,
                cart: flag === -1 ? state.cart.concat({ ...action.item, count: 1 }) : 
                state.cart.map(item => item.id === action.item.id ? ({ ...item, count: item.count + 1}) : item )
            };
        }
        case REMOVE_TO_CART: {
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.item.id ? ({ ...item, count: item.count - 1}) : item )
            };            
        }
        case DELETE_TO_CART: {
            return {
                cart: state.cart.filter(item => item.id !== action.item.id)
            }
        }
        case CHECK_CART_ITEM: {
            return {
                cart: state.cart.map(item => item.id === action.item.id ? ({ ...item, check : !item.check }) : item )
            }
        }

        default: {
            return state;
        }
    }

}

export default CartReducer;