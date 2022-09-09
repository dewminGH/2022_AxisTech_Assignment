import { combineReducers } from "redux";

import fetchProjectsReducer from "./fetchProjectsReducer";

export default combineReducers({
    Fetch_Projects : fetchProjectsReducer
})