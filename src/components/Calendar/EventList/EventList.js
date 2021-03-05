import React from 'react';

const EventList = (props) => {
    console.log(props.events);
    return (
        <div>
            <ul>
                {props.events.length === 0 ? <li>start creating events</li> : 
                    props.events.map( event => 
                        <li>
                            <h3>{event.material}</h3>
                            <p>{event.name}</p>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default EventList;