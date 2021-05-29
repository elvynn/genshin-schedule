import React from 'react';
import styles from './EventList.module.css';
import { Link } from "react-router-dom";

const domains = {
    freedom: "Forsaken Rift",
    prosperity: "Taishan Mansion",
    resistance: "Forsaken Rift",
    diligence: "Taishan Mansion",
    ballad: "Forsaken Rift",
    gold: "Taishan Mansion"
}

const EventList = (props) => {
    let isSchedule = false;
    props.events.map((event, key) =>  event[Object.keys(event)].length ? isSchedule = true : null );
    return (
        <div>
            <ul className={styles.eventList}> 
                {!isSchedule 
                    ? <li>
                        <div className={styles.eventInfo}>
                            <p className="text-center m-0">No events for this day, <Link to="/characters" className={styles.EventLink}>start adding your characters!</Link> (weapons soon)</p>
                        </div>
                     </li> 
                    : props.events.map( (event, key) => 
                        event[Object.keys(event)].length ? 
                            (<li key={key}>
                            <div className={styles.eventInfo}>
                                <div className={styles.Material}>
                                    <img src={"./assets/images/mats/"+Object.keys(event)+".png"} alt={Object.keys(event)} />
                                </div>
                                <div>
                                    <h3>{Object.keys(event)}</h3>
                                    <p> <img src="./assets/images/ui/dominio.png" alt="domain" /><strong>Domain of Mastery: </strong> {domains[Object.keys(event)]}</p>

                                    {/* Character loop */}
                                    <ul>
                                        {event[Object.keys(event)].map((item, key) => 
                                            <li key={key}>
                                                <img src={"./assets/images/characters/"+item.id+".png"} alt={item.id} />
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            
                        </li>) : null)
                }
            </ul>
        </div>
    );
};

export default EventList;