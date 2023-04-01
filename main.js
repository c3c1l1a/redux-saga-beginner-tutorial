import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import Posts from './Posts'
import Post from './Post'
import reducer from './reducers'

import { rootSaga } from './sagas.js';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <>
      <Counter
        value={store.getState().counter}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')} 
      />
      <Posts onLoad={() => action('GET_POSTS_REQUESTED')}>
        {store.getState().posts.map((post, index) => {
          return (
            <Post key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Post>
          )
        })}
      </Posts>
    </>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
