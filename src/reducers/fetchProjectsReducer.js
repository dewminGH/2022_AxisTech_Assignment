import { Fetch_Fundraising } from "../types/types"

const fetchProjectsReducer = (state={} , action)=>{

    if(action.type===Fetch_Fundraising)
    return action.payload;
    return state;
}

export default fetchProjectsReducer;