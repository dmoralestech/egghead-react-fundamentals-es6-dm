import React from 'react';
// import {createStore} from 'redux';

const counter = (state = 0, action) => {
    console.log("enter counter");
    console.log(action, state);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({}); // dummy dispatch

    return { getState, dispatch, subscribe };

};

const store = createStore(counter);

const CounterComponent = ({value, onIncrement, onDecrement}) =>
    (<div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>);

class App extends React.Component {
    render() {
        console.log(store.getState());
        return (
            <div>
                <CounterComponent
                    value={store.getState()}
                    onIncrement={() => {
                        console.log("increment")
                        store.dispatch({
                            type: 'INCREMENT'
                        });
                    }
                    }

                    onDecrement={() => {
                        console.log("decrement");
                        store.dispatch({
                            type: 'DECREMENT'
                        });
                    }
                    }
                />
            </div>
        );
    }
}

export default App
