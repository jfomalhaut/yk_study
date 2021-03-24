import { CartAction } from '../actions';

const { ADD_TO_CART } = CartAction;

const initialState = {
    cart: []
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
        
        default: {
            return state;
        }
    }

}

export default CartReducer;