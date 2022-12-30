import React, { useState } from "react";
const Printing = (props) => {
    const [Message, SetMessage] = useState("");
    function handleData(e) {
        console.log(e);
        SetMessage(e.target.value);
    }
    return (
        <>
            <input type="text" name="data" onChange={handleData} /><br />
            <p>{Message}</p>
        </>
    );
}
export default Printing;