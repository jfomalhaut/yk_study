import { spawn } from 'redux-saga/effects';
import watchUser from './UserSaga';

export default function* rootSaga() {
	yield spawn(watchUser);
}