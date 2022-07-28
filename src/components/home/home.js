import React, {useState} from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Trains from "../train/trains";
import './home.css'
import App from "../../App";
import Main from "./Main";
import Registration from "../user/registration";
import Login from "../user/login";
import {observer} from "mobx-react-lite";
import TrainState from '../../store/train'
import addTrain from "../train/addTrain";
import UpDateTrain from "../train/upDateTrain";

const Home = observer(() => {

    return (
        <div>
            <Router>
                <div className={"Header"}>
                    <div className={"left"}><Link to={'/trains'}><p>trains</p></Link></div>
                    {
                        TrainState.isAdmin ? <div className={"left"}><Link to={'/addTrain'}><p>add Train</p></Link></div> : <p></p>
                    }
                    <h3>Our Trains</h3>
                    <div className={"right"}>
                        <Link to={'/login'}><p>Sign in</p></Link>
                        <Link to={'/registration'}><p>Registration</p></Link>
                    </div>
                </div>


            <Switch>
                <Route exact={true} path={'/trains'} component={Main}/>
                <Route exact={true} path={'/registration'} component={Registration}/>
                <Route exact={true} path={'/login'} component={Login}/>
                <Route exact={true} path={'/addTrain'} component={addTrain}/>
                <Route exact={true} path={'/upDate/:id'} component={UpDateTrain}/>
            </Switch>
            </Router>
        </div>
    );
});

export default Home;