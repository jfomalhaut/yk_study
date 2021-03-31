import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    cart: CartReducer,
    user: UserReducer,
});

export default rootReducer;
