import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER,COOKIE_KEY_REMINDER} from "../constants";
import {bake_cookie,read_cookie} from 'sfcookies';



const reminder = (action) => {
    const{text,time} = action
    return ({
        id : Math.random(),
        text,
        time
    });
}



const reminders = (state = read_cookie(COOKIE_KEY_REMINDER) || [], action = {}) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [
                ...state,
                reminder(action)
            ];
            bake_cookie(COOKIE_KEY_REMINDER,reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = state.filter((reminder)=> reminder.id !== action.id);
            bake_cookie(COOKIE_KEY_REMINDER,reminders);
            return reminders;
        case CLEAR_REMINDER:
            reminders = [];
            bake_cookie(COOKIE_KEY_REMINDER,reminders);
            return reminders;
        default: return state;
    }
}

export default reminders;