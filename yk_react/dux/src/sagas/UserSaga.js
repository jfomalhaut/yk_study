import Axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserAction } from '../actions'
const { loginSuccess, loginFailure, LOGIN } = UserAction;

function* UserSaga(action) {
    try {
        const { payload } = action;
        const { data: {data} } = yield call([Axios, 'post'], 'http://localhost:4000/api/login', payload);
        if(data.length>0){
            yield put(loginSuccess(data));
        } else {
            throw false;
        }
    } catch (error) {
        yield put(loginFailure());
    }
};

export default function* watchUser(){
    yield takeLatest(LOGIN, UserSaga);
}