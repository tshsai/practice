import React,{Component} from "react";
import Child from "../child/Child";

export default class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
        this.increaseValue=this.increaseValue.bind(this);
    }
    render(){
        return(
            <div>
                <Child counter={this.state.counter} increasefun={this.increaseValue}/>
                <Child counter={this.state.counter} increasefun={this.increaseValue}/>
                <Child counter={this.state.counter} increasefun={this.increaseValue}/>
                
            </div>
        );
    }
    increaseValue(){
        this.setState({counter: this.state.counter+1});
    }
    
}