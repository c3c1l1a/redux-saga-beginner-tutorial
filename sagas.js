import { put, takeEvery, all, call } from 'redux-saga/effects'
import api from './api'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga(){
	console.log('Hello Saga!');
}

export function* increamentAsync(){
	yield delay(1000)
	yield put({ type: 'INCREMENT' })
}

export function* watchIncreamentAsync(){
	yield takeEvery('INCREMENT_ASYNC', increamentAsync)
}

export function* getAllPosts(){
	const posts = yield call(api.getAllPosts)
	console.log(posts);
	yield put({ type: 'GET_POSTS_SUCCESS', payload: posts})
}

export function* watchGetAllPosts(){
	yield takeEvery('GET_POSTS_REQUESTED', getAllPosts)
}

export function* rootSaga(){
	yield all([
		helloSaga(),
		watchIncreamentAsync(),
		watchGetAllPosts()
	])
}

