import React, {useState} from 'react';
import './registration.css'
import {observer} from "mobx-react-lite";
import TrainState from '../../store/train'
import {Link} from "react-router-dom";
import UserService from "../../Services/userService";

const Login = observer(() => {
    let [data, setData] = useState({})

    function login(e){
        e.preventDefault()
        setData(data.email = e.target.login.value)
        setData(data.password = e.target.password.value)
        UserService.EnterUser(data).then(value => {
            TrainState.setToken(value.accessToken)
            if(value.accessToken) {
                alert("You logined")
                getCurrentUser(data.email)
            }else {
                alert("Bad data!!!")
            }
        })
    }
    function getCurrentUser(data){
        UserService.GetCurrentUser(data).then(v =>{

            TrainState.setCurrentUser(v[0])
            if(v[0].role === 'admin'){
                TrainState.setIsAdmin(true)
            }
        })
    }
    return (
        <div>
            <div>
                <center>
                    <div className={"sign"}>Registration</div>
                    <div className={"enter"}>
                        <form method={"POST"} onSubmit={login}>
                            <input name={"login"} type={"text"}  placeholder={"Enter your login"}/><br/>
                            <input name={"password"} type={"password"}  placeholder={"Create your password"}/><br/>
                            <button type={'submit'}>Sign in</button>
                        </form>
                        <div>
                            <p className={"reg"}>if you have not registered yet</p>
                            <Link to={'/registration'}>
                                <button data-testid="sub">Registration</button>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
});

export default Login;