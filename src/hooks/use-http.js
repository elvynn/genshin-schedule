import useReducer from 'react';
import axios from 'axios';

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null };
        case 'RESPONSE':
            return {...currentHttpState, loading: false};
        case 'ERROR':
            return { loading:false, error: action.errorMessage };
        case 'CLEAR':
            return {...currentHttpState, error: null };
        default:
            throw new Error('Something went wrong');
    }
}

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null
    });

    const sendRequest = (url, method, body) => {
        
    } 


    
};

export default useHttp;