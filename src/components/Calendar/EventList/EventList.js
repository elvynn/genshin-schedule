import React, {useState} from 'react';
import styles from './EventList.module.css';

let eventList = "<li>No events for this day</li>";



const EventList = (props) => {
    return (
        <div>
            <ul className={styles.eventList}> 
                {props.events.length === 0 ? <li>No events for this day</li> : 
                props.events.map( (event, key) => 
                <li key={key}>
                    <div className={styles.eventInfo}>
                        <div>
                            <img src={"./assets/images/mats/"+Object.keys(event)+".png"} alt={Object.keys(event)} />
                        </div>
                        <h3>{Object.keys(event)}</h3>
                    </div>
                    <ul>
                        {event[Object.keys(event)].map((item, key) => 
                            <li key={key}>
                                <img src={"./assets/images/characters/"+item.id+".png"} alt={item.id} />
                            </li>
                        )}
                    </ul>
                </li>)}
            </ul>
        </div>
    );
};

export default EventList;
/*
{props.events.length === 0 ? <li>No events for this day</li> : 
    props.events.map( (event, key) => 
        <li key={key}>
            <div>
                <img src={"./assets/images/mats/"+event.material+".png"} alt={event.material} />
            </div>
            <div>
                <p>{event.name}</p>
            </div>
            <h3>{event.material}</h3>
            
        </li>)} */