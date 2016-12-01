import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorldComponent extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        );
    }
}

React.render(
    <HelloWorldComponent name="Joe Schmoe"/>,
    document.getElementById('react_example')
);