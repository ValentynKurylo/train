import React, {useState} from 'react';
import './settinf.css'
import TrainService from "../../Services/trainSerbice";
import {observer} from "mobx-react-lite";
import TrainState from '../../store/train'


const Setting = observer(() => {

    let [form, setForm] = useState({})

    function Find(e){
        e.preventDefault()
        setForm(form.from =  e.target.from.value)
        setForm(form.to =  e.target.to.value)
        setForm(form.date =  e.target.data.value)
        console.log(form)
        if(form.from && form.to && form.date){
            console.log('1')
            TrainService.GetTrainsByFromTownandToTownAndData(form.from, form.to, form.date).then(value => {
                value.map(v => {
                    v.data = v.data.slice(0, 10)
                })
                TrainState.setTrains(value)
            })
        }
        else if(form.from && form.to){
            console.log('2')
            TrainService.GetTrainsByFromTownandToTown(form.from, form.to).then(value => {
                value.map(v => {
                    v.data = v.data.slice(0, 10)
                })
                TrainState.setTrains(value)
            })
        }
        else if(form.from){
            console.log('3')
            TrainService.GetTrainsByFromTown(form.from).then(value => {
                value.map(v => {
                    v.data = v.data.slice(0, 10)
                })
                TrainState.setTrains(value)
            })
        }
        else if(form.to){
            TrainService.GetTrainsByToTown(form.to).then(value => {
                value.map(v => {
                    v.data = v.data.slice(0, 10)
                })
                TrainState.setTrains(value)
            })
        }
        else if(form.date){
            console.log('3')
            TrainService.GetTrainsByData(form.date).then(value => {
                value.map(v => {
                    v.data = v.data.slice(0, 10)
                })
                TrainState.setTrains(value)
            })
        }
    }

    return (
        <div className={'wrap'}>
            <form onSubmit={Find}>
            <label>From: <input type={"text"} name={'from'}/></label>
            <label>To: <input type={"text"} name={'to'}/></label>
            <label>Data: <input type={"date"} name={'data'}/></label>
                <button type={'submit'}>Find</button>
            </form>
        </div>
    );
});

export default Setting;