// https://jsbin.com/zijoxu/edit?js,output

import React from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 2
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value,
            cat: this.state.cat + 1
        });
    }

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
                <h2>{this.state.cat}</h2>
                <h2>{this.props.appName}</h2>
            </div>
        );
    }
}

export default App
