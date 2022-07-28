import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {tab} from "@testing-library/user-event/dist/tab";
import TrainService from "../../Services/trainSerbice";

const AddTrain = () => {

    let [train, setTrain] = useState({})
    function Add(e) {
        e.preventDefault()
        setTrain(train.fromTown = e.target.fromTown.value)
        setTrain(train.toTown = e.target.toTown.value)
        setTrain(train.data = e.target.date.value)
        setTrain(train.time = e.target.time.value)
        setTrain(train.price = e.target.price.value)
        try {
            TrainService.postTrain(train)
            alert("train was added")
        } catch (e) {
            alert('error')
        }

    }

    return (
        <div>
            <div>
                <center>
                    <div className={"sign"}>Add Train</div>
                    <div className={"enter"}>
                        <form method={"POST"} onSubmit={Add}>
                            <input name={"fromTown"} type={"text"}  placeholder={"Enter From Town"}/><br/>
                            <input name={"toTown"} type={"text"}  placeholder={"Enter to Town"}/><br/>
                            <input name={"date"} type={"date"}  placeholder={"Enter date"}/><br/>
                            <input name={"time"} type={"time"}  placeholder={"Enter time"}/><br/>
                            <input name={"price"} type={"number"} min={0}  placeholder={"Enter price"}/><br/>
                            <button type={'submit'}>Add</button>
                        </form>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default AddTrain;