import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const _nullUser = Object.freeze({
    id: null
});

const SessionReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            newState = merge({}, oldState, { id: action.user.id});
            return (newState);
        case LOGOUT_CURRENT_USER:
            // debugger
            return _nullUser;
        default:
            return oldState;
    }
}

export default SessionReducer;