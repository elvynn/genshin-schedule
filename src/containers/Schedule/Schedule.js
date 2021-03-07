import { React, useState, useContext, useEffect, useReducer } from 'react';
import { Context } from '../../hoc/Store'
import EventList  from '../../components/Calendar/EventList/EventList';
import WeekdayTab from '../../components/Calendar/WeekdayTab/WeekdayTab';


const calendarReducer = (state, action) => {
    switch(action.day){
        case "monday":
            //Create condition filter for monday materials
            return action.schedule.filter(i => (i.material === "freedom") || (i.material === "prosperity") );
        case "tuesday":
            return action.schedule.filter(i => i.material === "resistance" || (i.material === "digligence") );
        case "wednesday":
            return action.schedule.filter(i => i.material === "ballad" || (i.material === "gold") );
        case "thursday":
            return action.schedule.filter(i => (i.material === "freedom") || (i.material === "prosperity") );
        case "friday":
            return action.schedule.filter(i => i.material === "resistance" || (i.material === "digligence") );
        case "saturday":
            return action.schedule.filter(i => i.material === "ballad" || (i.material === "gold") );
        case "sunday":
            return action.schedule;
        default:
            throw new Error("something went wrong");
    }
}

const Schedule = () => {
    //Global context schedule items
    const [schedule] = useContext(Context);

    //custom calendar by selected day
    const [calendar, dispatchCalendar] = useReducer(calendarReducer,schedule);  
    const [weekday, setWeekday] = useState("monday");

    useEffect(() => {
       dispatchCalendar({day: weekday, schedule: [...schedule]});
    }, [schedule, weekday]);

    const handleTabs = (tab) => {
        setWeekday(tab);
    }

    return (
        <div>
            <WeekdayTab clicked={handleTabs} active={weekday} />
            <div>
                <h2>Events for Monday</h2>
                <EventList events={calendar} weekday={weekday} />
            </div>
        </div>
    );
};

export default Schedule;