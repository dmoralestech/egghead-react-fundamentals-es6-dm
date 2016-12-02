import React from 'react';
import { createStore } from 'redux';

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

//
const Counter1 = ({value, onIncrement, onDecrement}) =>
    (<div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>);
//
// const render = () => {
//     ReactDOM.render(
//         <Counter
//             value={store.getState()}
//             onIncrement={() =>
//                 store.dispatch({
//                     type: 'INCREMENT'
//                 })
//             }
//             onDecrement={() =>
//                 store.dispatch({
//                     type: 'DECREMENT'
//                 })
//             }
//         />,
//         document.getElementById('root')
//     );
// }


class App extends React.Component {
    render() {
        return (
            <div>
                <Counter1
                    value={store.getState()}
                    onIncrement={() =>
                                store.dispatch({
                                    type: 'INCREMENT'
                                })
                            }
                    onDecrement={() =>
                                store.dispatch({
                                    type: 'DECREMENT'
                                })
                            }
                />
            </div>
        );
    }
}

export default App
