import {useState} from 'react';
function FunctionDemo(props){
    const[counter,setCounter]=useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{setCounter(counter+1);}}>Increase</button>
            <button onClick={()=>{setCounter(counter-1);}}>Decrease</button>
            <button onClick={()=>{setCounter(0);}}>Reset</button>
        </div>
    );
}
export default FunctionDemo;