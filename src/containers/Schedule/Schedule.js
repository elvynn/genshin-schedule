import { React, useState, useContext } from 'react';
import { Context } from '../../hoc/Store'
import EventList  from '../../components/Calendar/EventList/EventList';

const Schedule = () => {
    const [schedule, dispatchSchedule] = useContext(Context);

    return (
        <div>
            <div>weekdays</div>
            <div>
                <h2>Events for Monday</h2>
                <EventList events={schedule} />
            </div>
        </div>
    );
};

export default Schedule;