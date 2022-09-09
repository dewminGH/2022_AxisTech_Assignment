import { combineReducers } from "redux";

import fetchProjectsReducer from "./fetchProjectsReducer";
import fetchDonteReducer from "./fetchDonteReducer";

export default combineReducers({
    Fetch_Projects : fetchProjectsReducer,
    Fetch_DonateAmoutes : fetchDonteReducer
})