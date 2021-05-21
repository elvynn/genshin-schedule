import React from 'react';
import styles from './EventList.module.css';

const domains = {
    freedom: "Forsaken Rift",
    prosperity: " Taishan Mansion",
    resistance: "Forsaken Rift",
    diligence: " Taishan Mansion",
    ballad: "Forsaken Rift",
    gold: " Taishan Mansion"
}

const EventList = (props) => {
    return (
        <div>
            <ul className={styles.eventList}> 
                {props.events.length === 0 
                    ? <li>No events for this day</li> 
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