import { CartAction } from '../actions';

const { ADD_TO_CART } = CartAction;

const initailState = {
	cart: 0
};

const CartReducer = (state = initailState, action) => {
	switch(action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cart: state.cart + 1
			};
		}
		default: {
			return state;
		}
	}
};

export default CartReducer;