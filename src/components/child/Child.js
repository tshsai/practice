import React,{Component} from "react";

export default class Child extends Component{
    render(){
        return(
            <div>
                <h1>value: {this.props.counter}</h1>
                <button onClick={this.props.increasefun}>I</button>
            </div>
        );
    }
}