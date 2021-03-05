import { React, useState, useContext, useEffect, useReducer } from 'react';
import { Context } from '../../hoc/Store'
import EventList  from '../../components/Calendar/EventList/EventList';


const calendarReducer = (state, action) => {
    const cond = null;
    switch(action.day){
        case "monday":
            //Create condition filter for monday materials
            return [...state.filter(i => i.material === "freedom" )];
        case "thuesday":
            return;
        case "wenesday":
            return;
        case "thursday":
            return;
        case "friday":
            return;
        case "saturday":
            return;
        case "sunday":
            return;
        default:
            throw new Error("something went wrong");
    }
}

const Schedule = () => {
    //Global context schedule items
    const [schedule, dispatchSchedule] = useContext(Context);

    //custom calendar by selected day
    const [calendar, dispatchCalendar] = useReducer(calendarReducer,schedule);  
    const [weekday, setWeekday] = useState("monday");

    useEffect(() => {
       dispatchCalendar({day: weekday});
    }, [schedule, weekday]);

    const handleTabs = () => {

    }

    return (
        <div>
            <div>weekdays</div>
            <div>
                <h2>Events for Monday</h2>
                <EventList events={calendar} weekday={weekday} />
            </div>
        </div>
    );
};

export default Schedule;