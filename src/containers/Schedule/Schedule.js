import { React, useState, useContext, useEffect, useReducer } from 'react';
import { Context } from '../../store/Store'
import EventList  from '../../components/Calendar/EventList/EventList';
import WeekdayTab from '../../components/Calendar/WeekdayTab/WeekdayTab';

import styles from './Schedule.module.css';


const calendarReducer = (state, action) => {
    switch(action.day){
        case "monday":
            console.log(action.schedule)
            const mon = [
                { freedom: action.schedule.filter(i => (i.material === "freedom") )},
                { prosperity: action.schedule.filter(i => (i.material === "prosperity")) }
            ]
            return mon;
        case "tuesday":
            const tue = [
                { resistance: action.schedule.filter(i => (i.material === "resistance") )},
                { digligence: action.schedule.filter(i => (i.material === "diligence")) }
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
                { digligence: action.schedule.filter(i => (i.material === "diligence")) }
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
                { digligence: action.schedule.filter(i => (i.material === "diligence")) },
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
                <div className={styles.ScheduleHeader}>
                    <img src="./assets/images/ui/paimon-event.png" alt="Paimon" />
                    <h2>Events for {weekday} </h2>
                </div>
                
                <EventList events={calendar} weekday={weekday} />
            </div>
        </div>
    );
};

export default Schedule;