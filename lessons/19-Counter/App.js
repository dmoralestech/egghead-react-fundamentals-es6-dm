import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const createStore1 = (reducer) => {
    let state;
    let listeners = [];
    console.log("enter create store");

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        console.log("state: " + getState());
        listeners.forEach(listener => {
            //console.log("calling: " + listener);
            listener();
        });
    };

    const subscribe = (listener) => {
        console.log("subscribe: " + listener);
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({}); // dummy dispatch

    return {getState, dispatch, subscribe};

};

const store = createStore(counter);

const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('app')
    )
}

render()
store.subscribe(render)

export default App
