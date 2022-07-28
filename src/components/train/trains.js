import  {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import TrainService from "../../Services/trainSerbice";
import TrainState from '../../store/train'
import {observer} from "mobx-react-lite";
import Train from "./train";



const Trains = observer(()=>{

    const dispatch = useDispatch()
    let trai = useSelector((state => state.trainReducer))
    let [t, setT] = useState([{}])
    let [n, setN] = useState('')
    useEffect(()=>{

        TrainService.GetTrains().then(value => {

            value.map(v => {
                v.data = v.data.slice(0, 10)
            })
            console.log(value)
            TrainState.setTrains(value)
        })
    }, [])

    return (
        <div className={'box'}>
            <div>
                {
                    TrainState.trains.map(value => <Train key={value.id} item={value}/>)

                }
            </div>
        </div>
    );
}, []);
export default Trains

