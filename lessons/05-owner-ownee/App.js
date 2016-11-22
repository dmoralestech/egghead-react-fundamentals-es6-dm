// https://jsbin.com/yixosu/edit?js,output
import React from 'react';

const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update} value={props.txt}/>
            <h1>{props.txt}</h1>
            <h1>{props.name}</h1>
        </div>
    );
}



class App extends React.Component {
    constructor() {
        super();
        this.state = {txt: ''}
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({txt: e.target.value})
    }

    componentDidMount(){
        this.setState({
            txt: this.props.txt
        })
    }

    render() {
        return (
            <div>
                <Widget txt={this.state.txt} name={this.props.name} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
            </div>
        );
    }
}


App.propTypes = {
    txt: React.PropTypes.string,
    name: React.PropTypes.string

}

App.defaultProps = {
    txt: 'this is the default txt',
    name: 'hello world'

}


export default App
