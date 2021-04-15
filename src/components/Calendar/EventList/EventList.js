import React, {useState} from 'react';
import styles from './EventList.module.css';

const EventList = (props) => {

    //Primero listado de materiales, luego anadimos pjs en listado. 
    //deberia gestionarse en reducer schedule
    return (
        <div>
            <ul> 
                {props.events.length === 0 ? <li>No events for this day</li> : 
                    props.events.map( (event, key) => 
                        <li key={key}>
                            {console.log(event.material)}
                            <div>
                                <img src={"./assets/images/mats/"+event.material+".png"} alt={event.material} />
                            </div>
                            <div>
                                <p>{event.name}</p>
                            </div>
                            <h3>{event.material}</h3>
                            
                        </li>)}
            </ul>
        </div>
    );
};

export default EventList;