import React from 'react';
import './train.css'
import {observer} from "mobx-react-lite";
import TrainState from '../../store/train'
import {Link, useParams} from "react-router-dom";
import TrainService from "../../Services/trainSerbice";


const Train = observer(({item}) => {

    let params = useParams()


    return (
        <div>
            <p className={'train'}>Train:  {item.fromTown} - {item.toTown}   -    {item.data}  at {item.time}    Price - {item.price} grn   </p> {TrainState.isAdmin ? <div>
            <Link to={'upDate/'+ item.id}>
                <button>UpDate</button>
            </Link>
                <button onClick={(e)=> {
                    e.preventDefault()
                    let del = prompt("Are you sure? Enter 1");
                    if (del === '1') {
                        try {
                            TrainService.deleteTrain(item.id)
                            alert('Train was deleted')
                        } catch (e) {
                            alert('error')
                        }

                    }
                }
                }>Delete</button></div>: <p></p>}
            <hr/>
        </div>
    );
});

export default Train;