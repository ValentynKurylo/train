import React from 'react';
import Home from "./home";
import Setting from "../setting/setting";
import Trains from "../train/trains";

const Main = () => {
    return (
        <div>
            <Setting/>
            <Trains/>
        </div>
    );
};

export default Main;