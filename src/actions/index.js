import { 
    Fetch_Fundraising,
    Fetch_donteAmounts
 } from "../types/types";

import TogetherWebAPI from "../api/TogetherWebAPI";

//api --
export const fetchProjects = ( pagination , limit)=> async dispatch =>{
    const response = await TogetherWebAPI.get(`dev/fundraising?pagination=${pagination}&limit=${limit}`);
    dispatch({type : Fetch_Fundraising , payload : response.data});
}

export const donateAmounts = () => async dispatch => {
    const response = await TogetherWebAPI.get('dev/amounts');
    dispatch({type : Fetch_donteAmounts , payload : response})
}

