import React, { useState } from "react";
const FormDemo = (props) => {
    const [data, setData] = useState({ username: null, password: null });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({
            username: e.target.nm.value,
            password: e.target.pwd.value
        })
    }
    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                Name: <input type="text" name="nm" /><br />
                Password: <input type="password" name="pwd" id="pwd" /><br />
                <input type="submit" value="Login" />
                <p>Yay {data.username}!!! Your account is created successfully and your password is {data.password}</p>
            </form>
        </div>
    );
}
export default FormDemo;