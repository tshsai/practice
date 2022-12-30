import React,{Component} from "react";
export default class LifeCycleDemo extends Component{
    constructor(props){
        super(props);
        console.log("constructor is called");
        this.state={
            counter:0
        }
        this.increaseValue=this.increaseValue.bind(this);
    }
    render(){
        console.log("render is invoked");
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.increaseValue}>Increase</button>
            </div>
        );
    }
    increaseValue(){
        this.setState({counter: this.state.counter+1});
    }
    componentDidMount(){
        console.log("ComponentDidMount is called");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate is called");
    }
}