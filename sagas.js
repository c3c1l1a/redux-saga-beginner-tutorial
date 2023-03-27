import { put, takeEvery, all } from 'redux-saga/effects'

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

export function* rootSaga(){
	yield all([
		helloSaga(),
		watchIncreamentAsync()
	])
}

