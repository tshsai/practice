import {useState,useEffect}  from 'react';
function UseEffectDemo(props){
    const[counterone,setCounterone]=useState(0);
    const[countertwo,setCountertwo]=useState(10);
    function show(){
        console.log("A simple show function");
    }
    useEffect(show,[countertwo]);
    return(
        <div>
            <h1>{counterone}</h1>
            <button onClick={()=>{setCounterone(counterone+1);}}>Increase</button>

            <h1>{countertwo}</h1>
            <button onClick={()=>{setCountertwo(countertwo+1);}}>Increase</button>
        </div>
    );
}

export default UseEffectDemo;