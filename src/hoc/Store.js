import React, {createContext, useReducer} from "react";
//Query
const initialState = []
/*
const initialState = {
    schedule: [],
    error: null
};
*/
function scheduleReducer(state, action){
    switch (action.type){
        case 'add':
            return [...state, action.item];
        case 'remove':
            return [...state.filter(i => i.id !== action.item.id)];
        default:
            throw new Error("something went wrong");
    }
}

const Store = ({children}) => {
    const[schedule, dispatchSchedule] = useReducer(scheduleReducer, initialState);
    return (
        <Context.Provider value={[schedule, dispatchSchedule]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;