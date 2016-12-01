
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const Counter = ({
//     value,
//     onIncrement,
//     onDecrement
// }) => (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//     </div>
// );
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

import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <b>Bold</b>
            </div>
        );
    }
}

export default App
