import React from 'react';
import ReactDOM from 'react-dom';
//
const Counter = ({value, onIncrement, onDecrement}) =>
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
                <Counter
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
