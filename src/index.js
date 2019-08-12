import React from 'react';
import ReactDOM from 'react-dom';
class Child extends React.Component{
    render(){
        return <h1 onMouseEnter={this.props.onMouseEnter}>Hello {this.props.name}, it seems that you are {this.props.age} years old.(you clicked this sentence for {this.props.points}</h1>
    }
}
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={name : 'A',age:16,points:0};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleMouseEnter(){
        const total = this.state.points;
        this.setState({points : total + 1});
    }
    render(){
        return (
            <div>
                <Child name={this.state.name}  age={this.state.age} onMouseEnter={this.handleMouseEnter} points={this.state.points}/>
            </div>
        )
    }
}
ReactDOM.render(<Parent />, document.getElementById('root'));