import { React, useState, useContext, useEffect, useReducer } from 'react';
import { Context } from '../../hoc/Store'
import EventList  from '../../components/Calendar/EventList/EventList';
import WeekdayTab from '../../components/Calendar/WeekdayTab/WeekdayTab';


const calendarReducer = (state, action) => {
    switch(action.day){
        case "monday":
            const mon = [
                { freedom: action.schedule.filter(i => (i.material === "freedom") )},
                { prosperity: action.schedule.filter(i => (i.material === "prosperity")) }
            ]
            return mon;
            //return action.schedule.filter(i => (i.material === "freedom") || (i.material === "prosperity") );
        case "tuesday":
            const tue = [
                { resistance: action.schedule.filter(i => (i.material === "resistance") )},
                { digligence: action.schedule.filter(i => (i.material === "digligence")) }
            ]
            return tue;
        case "wednesday":
            const wed = [
                { ballad: action.schedule.filter(i => (i.material === "ballad") )},
                { gold: action.schedule.filter(i => (i.material === "gold")) }
            ]
            return wed;
        case "thursday":
            const thu = [
                { freedom: action.schedule.filter(i => (i.material === "freedom") )},
                { prosperity: action.schedule.filter(i => (i.material === "prosperity")) }
            ]
            return thu;
        case "friday":
            const fri = [
                { resistance: action.schedule.filter(i => (i.material === "resistance") )},
                { digligence: action.schedule.filter(i => (i.material === "digligence")) }
            ]
            return fri;
        case "saturday":
            const sat = [
                { ballad: action.schedule.filter(i => (i.material === "ballad") )},
                { gold: action.schedule.filter(i => (i.material === "gold")) }
            ]
            return sat;
        case "sunday":
            const sun = [
                { freedom: action.schedule.filter(i => (i.material === "freedom") )},
                { prosperity: action.schedule.filter(i => (i.material === "prosperity")) },
                { resistance: action.schedule.filter(i => (i.material === "resistance") )},
                { digligence: action.schedule.filter(i => (i.material === "digligence")) },
                { ballad: action.schedule.filter(i => (i.material === "ballad") )},
                { gold: action.schedule.filter(i => (i.material === "gold")) }
            ]
            return sun;
        default:
            throw new Error("something went wrong");
    }
}

const Schedule = () => {
    //Global context schedule items
    const [schedule] = useContext(Context);

    //custom calendar by selected day
    const [weekday, setWeekday] = useState("monday");
    const [calendar, dispatchCalendar] = useReducer(calendarReducer,[]);  

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
                <h2>Events for {weekday}</h2>
                <EventList events={calendar} weekday={weekday} />
            </div>
        </div>
    );
};

export default Schedule;