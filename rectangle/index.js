const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const height = document.getElementById('height');
height.addEventListener('click', e => dispatch({ type: 'INCREASE_HEIGHT', value: 10 }))

const width = document.getElementById('width');
width.addEventListener('click', e => dispatch({ type: 'INCREASE_WIDTH', value: 10 }))

const red = document.getElementById('red');
red.addEventListener('click', e => dispatch({ type: 'CHANGE_COLOR', value: 'red' }))

const blue = document.getElementById('blue');
blue.addEventListener('click', e => dispatch({ type: 'CHANGE_COLOR', value: 'blue' }))
