import {RECEIVE_FOUR_ALBUMS} from "../actions/album_actions"

const uiReducer = (oldState = {albumIds: []}, action) => {
    // debugger
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_FOUR_ALBUMS:
            const albumIds = Object.keys(action.albums)
            
            return {albumIds};
        default:
            return oldState;
    }
}

export default uiReducer;
