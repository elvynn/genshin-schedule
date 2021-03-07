import React from 'react';

const WeekdayTab = (props) => {
    return (
        <div>
            <ul>
                <li onClick={() => props.clicked("monday")}>Mon</li>
                <li onClick={() => props.clicked("tuesday")}>Tue</li>
                <li onClick={() => props.clicked("wednesday")}>Wed</li>
                <li onClick={() => props.clicked("thursday")}>Thu</li>
                <li onClick={() => props.clicked("friday")}>Fri</li>
                <li onClick={() => props.clicked("sunday")}>Sun</li>
            </ul>
        </div>
    );
};

export default WeekdayTab;