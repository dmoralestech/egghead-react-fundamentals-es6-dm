// https://jsbin.com/qiwoxax/edit?js,output

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
            name: ""
        }
        this.update = this.update.bind(this)
        this.nameUpdate = this.nameUpdate.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }

    nameUpdate(e) {
        this.setState({
            name: ReactDOM.findDOMNode(this.refs.name.refs.textbox).value
        })
    }

    render() {
        return (
            <div>
                <Slider ref="red" update={this.update}/>
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update}/>
                {this.state.green}
                <br />
                <Slider ref="blue" update={this.update}/>
                {this.state.blue}
                <br />
                <TextBox ref="name" update={this.nameUpdate}/>
                <br />
            </div>
        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input ref="inp" type="range"
                       min="0"
                       max="255"
                       onChange={this.props.update}/>
            </div>
        );
    }
}

class TextBox extends React.Component {
    render() {
        return (
            <div>
                <input ref="texbox" type="text"
                       onChange={this.props.update}/>
            </div>
        );
    }
}



export default App
