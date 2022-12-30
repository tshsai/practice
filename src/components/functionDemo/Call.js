import {useState,useEffect} from 'react';
import axios from 'axios';
function Call(props){
const[data,setData]=useState({flag: false, Name: null, Gender:null});

async function show(){
    let url='https://randomuser.me/api/';
    let response=await axios.get(url);
    console.log(response.data.results[0].name.first);
    
    // console.log(responseData);
    setData({flag: true,Name: response.data.results[0].name.first, Gender:response.data.results[0].gender});
}
useEffect(()=>{
    show();
},[]);

return(
    <div>
        {data.flag?<h1>{data.Name} is {data.Gender}</h1>:<h1>Loading.....</h1>}
    </div>
);
}
export default Call;
