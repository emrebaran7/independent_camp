import { combineReducers } from "redux";

import EntitiesReducer from "./entities_reducer";
import ErrorsReducer from './errors_reducer'
import SessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";

const RootReducer = combineReducers({
    session: SessionReducer,
    entities: EntitiesReducer,
    errors: ErrorsReducer,
    ui: uiReducer
});

export default RootReducer;