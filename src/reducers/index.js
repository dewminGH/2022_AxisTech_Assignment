import { combineReducers } from "redux";

import fetchProjectsReducer from "./fetchProjectsReducer";
import fetchDonteReducer from "./fetchDonteReducer";
import selectedRedioboxReducer from "./selectedRedioReducer";
import donateMoneyReducer from "./donateMoneyReducer";

export default combineReducers({
    Fetch_Projects : fetchProjectsReducer,
    Fetch_DonateAmoutes : fetchDonteReducer,
    Seleted_redio : selectedRedioboxReducer,
    Donate_Money_msg : donateMoneyReducer
})