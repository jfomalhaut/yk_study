const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const login = ( payload ) => ({ type: LOGIN, payload });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const loginFailure = (data) => ({ type: LOGIN_FAILURE, data });

export default {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    login,
    loginSuccess,
    loginFailure,
}