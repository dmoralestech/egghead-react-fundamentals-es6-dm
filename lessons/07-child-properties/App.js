// https://jsbin.com/cumopab/edit?js,output

import React from 'react';
class App extends React.Component {
    render() {
        return (
            <div>
                <Button>I <Heart/> React</Button>
                <Button>I <Star/> React</Button>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>
const Star = () => <span className="glyphicon glyphicon-star"></span>

export default App
