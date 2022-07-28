import React, {useState} from 'react';
import TrainService from "../../Services/trainSerbice";
import {useParams} from "react-router-dom";

const UpDateTrain = () => {

    let params = useParams()

    let [train, setTrain] = useState({})
    function UpDate(e) {
        e.preventDefault()
        setTrain(train.fromTown = e.target.fromTown.value)
        setTrain(train.toTown = e.target.toTown.value)
        setTrain(train.data = e.target.date.value)
        setTrain(train.time = e.target.time.value)
        setTrain(train.price = e.target.price.value)
        try {
            TrainService.putTrain(train, params.id)
            alert("train was upDated")
        } catch (e) {
            alert('error')
        }

    }

    return (
        <div>
            <div>
                <center>
                    <div className={"sign"}>Up Date Train</div>
                    <div className={"enter"}>
                        <form method={"POST"} onSubmit={UpDate}>
                            <input name={"fromTown"} type={"text"}  placeholder={"Enter From Town"}/><br/>
                            <input name={"toTown"} type={"text"}  placeholder={"Enter to Town"}/><br/>
                            <input name={"date"} type={"date"}  placeholder={"Enter date"}/><br/>
                            <input name={"time"} type={"time"}  placeholder={"Enter time"}/><br/>
                            <input name={"price"} type={"number"} min={0}  placeholder={"Enter price"}/><br/>
                            <button type={'submit'}>UpDate</button>
                        </form>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default UpDateTrain;