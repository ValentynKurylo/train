import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './registration.css'
import UserService from "../../Services/userService";

const Registration = () => {

    let [data, setData] = useState({})

    function registr(e) {
        e.preventDefault()
        setData(data.name = e.target.username.value)
        setData(data.email = e.target.login.value)
        setData(data.password = e.target.password.value)
        setData(data.role = "user")
        console.log(data);
        if (data.name && data.email && data.password) {
            UserService.postUser(data)
            alert("Successful!!!")
        }
        else{
            alert("Bad data!!!")
        }
    }

    return (
        <div>
            <div>
                <center>
                    <div className={"sign"}>Registration</div>
                    <div className={"enter"}>
                        <form method={"POST"} onSubmit={registr}>
                            <input name={"username"} type={"text"}  placeholder={"Enter your username"}/><br/>
                            <input name={"login"} type={"text"}  placeholder={"Enter your login"}/><br/>
                            <input name={"password"} type={"password"}  placeholder={"Create your password"}/><br/>
                            <button type={'submit'}>Register</button>
                        </form>
                        <div>
                            <p className={"reg"}>if you have already registered</p>
                            <Link to={'/login'}>
                                <button data-testid="sub">Sign in</button>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Registration;