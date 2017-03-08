import { combineReducers } from "redux"

import JsonReducer from "./jsonReducer";
import counter from "./counter";

export default combineReducers({
    JsonReducer,
    counter
});