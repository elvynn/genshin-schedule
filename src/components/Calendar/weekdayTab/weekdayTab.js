import React from 'react';
import styles from "./WeekdayTab.module.css";

const WeekdayTab = (props) => {
    return (
        <div>
            <ul className={styles.WeekdayTab}>
                <li 
                    onClick={() => props.clicked("Monday")} 
                    className={ props.active === "Monday" ? styles.Active : null }>Mon</li>
                <li 
                    onClick={() => props.clicked("Tuesday")}
                    className={ props.active === "Tuesday" ? styles.Active : null }>Tue</li>
                <li 
                    onClick={() => props.clicked("Wednesday")}
                    className={ props.active === "Wednesday" ? styles.Active : null }>Wed</li>
                <li 
                    onClick={() => props.clicked("Thursday")}
                    className={ props.active === "Thursday" ? styles.Active : null }>Thu</li>
                <li 
                    onClick={() => props.clicked("Friday")}
                    className={ props.active === "Friday" ? styles.Active : null }>Fri</li>
                <li 
                    onClick={() => props.clicked("Saturday")}
                    className={ props.active === "Saturday" ? styles.Active : null }>Sat</li>
                <li 
                    onClick={() => props.clicked("Sunday")}
                    className={ props.active === "Sunday" ? styles.Active : null }>Sun</li>
            </ul>
        </div>
    );
};

export default WeekdayTab;