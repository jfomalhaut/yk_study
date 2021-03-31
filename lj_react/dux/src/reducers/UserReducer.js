import { UserAction } from '../actions';
const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } = UserAction;

const initailState = {
	logged: false,
	userinfo: {},
	failure: 0
};

const UserReducer = (state = initailState, action) => {
	switch (action.type) {
		case LOGIN: {
			return state;
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				logged: true,
				userinfo: action.data,
				failure: 0
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				failure: state.failure + 1
			};
		}
		default: {
			return state;
		}
	};
};

export default UserReducer;