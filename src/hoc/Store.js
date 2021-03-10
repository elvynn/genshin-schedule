import React, {createContext, useReducer} from "react";
//Query
const initialState = JSON.parse(localStorage.getItem('schedule')) || [];
/*
const initialState = {
    schedule: [],
    error: null
};
*/
function scheduleReducer(state, action){
    switch (action.type){
        case 'add':
            const plusState = [...state, action.item];
            localStorage.setItem('schedule', JSON.stringify(plusState));
            return plusState;
        case 'remove':
            const minusState = [...state.filter(i => i.id !== action.item.id)];
            localStorage.setItem('schedule', JSON.stringify(minusState));
            return minusState;
        default:
            throw new Error("something went wrong");
    }
}

const Store = ({children}) => {
    const[schedule, dispatchSchedule] = useReducer(scheduleReducer, initialState);
    return (
        <Context.Provider value={[schedule, dispatchSchedule]} >
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;