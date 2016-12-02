import React from 'react';
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

const store = createStore(counter);

const CounterComponent = ({value, onIncrement, onDecrement}) =>
    (<div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>);

class App extends React.Component {
    render() {
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
