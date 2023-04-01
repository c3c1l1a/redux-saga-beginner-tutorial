const initialState = {
  counter: 0, 
  posts: []
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: stae.counter + 1}
    case 'INCREMENT_IF_ODD':
      return {...state, counter: (state.counter % 2 !== 0) ? state.counter + 1 : state.counter}
    case 'DECREMENT':
      return {...state, counter: state.counter - 1}
    case 'GET_POSTS_SUCCESS':
      return {...state, posts: action.payload}
    default:
      return state
  }
}


