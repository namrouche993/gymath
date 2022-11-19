//import counterReducer from './counter';
//import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const loggedReducer = (state = false,action) => {
    switch(action.type){
        case 'SIGN_in':
            return !state;
        default:
            return  state;
    }
}

const counterReducer = (state = 0,action) => {
    switch(action.type){
        case 'INCREMENT':
            return (state + action.payload)
        case 'DECREMENT':
            return state -1
        default:
            return state
    }
}

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})
export default allReducers;