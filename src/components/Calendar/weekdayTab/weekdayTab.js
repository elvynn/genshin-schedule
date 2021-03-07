import React from 'react';
import styles from "./WeekdayTab.module.css";

const WeekdayTab = (props) => {
    return (
        <div>
            <ul className={styles.WeekdayTab}>
                <li 
                    onClick={() => props.clicked("monday")} 
                    className={ props.active === "monday" ? styles.Active : null }>Mon</li>
                <li 
                    onClick={() => props.clicked("tuesday")}
                    className={ props.active === "tuesday" ? styles.Active : null }>Tue</li>
                <li 
                    onClick={() => props.clicked("wednesday")}
                    className={ props.active === "wednesday" ? styles.Active : null }>Wed</li>
                <li 
                    onClick={() => props.clicked("thursday")}
                    className={ props.active === "thursday" ? styles.Active : null }>Thu</li>
                <li 
                    onClick={() => props.clicked("friday")}
                    className={ props.active === "friday" ? styles.Active : null }>Fri</li>
                <li 
                    onClick={() => props.clicked("sunday")}
                    className={ props.active === "sunday" ? styles.Active : null }>Sun</li>
            </ul>
        </div>
    );
};

export default WeekdayTab;