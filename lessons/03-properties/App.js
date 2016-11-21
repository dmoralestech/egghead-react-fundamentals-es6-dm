// https://jsbin.com/yirifo/edit?html,js,output

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let txt = this.props.txt
        return <div>
            <h1>{txt}</h1>
            <h2>{this.props.cat}</h2>
            <h2>{this.props.name}</h2>
        </div>
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
}

App.defaultProps = {
    txt: 'this is the default txt',
    cat: 0,
    name: "nothing"

}

ReactDOM.render(
    <App cat={5} name="darwin"/>,
    document.getElementById('app')
);
