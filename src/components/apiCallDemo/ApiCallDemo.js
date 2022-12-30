import React,{Component} from "react";

export default class ApiCallDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            flag:false,
            data: null,
            image_url: null
        }
    }
    render(){
        return(
            <div>
                {this.state.flag?<h1>{this.state.data}</h1>:<h1>Loading.....</h1>}
            </div>
        );
    }
    async componentDidMount(){
        let url='https://randomuser.me/api/';
        let response=await fetch(url);
        console.log(response);
        let responseData=await response.json();
        console.log(responseData);
        let first=responseData.results[0].name.first;
        let last=responseData.results[0].name.last;
        this.setState({flag: true,data: `${last} ${first}`,image_url:responseData.results[0].picture.large });
    }
}