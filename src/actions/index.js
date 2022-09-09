import { Fetch_Fundraising } from "../types/types";

import TogetherWebAPI from "../api/TogetherWebAPI";

export const fetchProjects = ( pagination , limit)=> async dispatch =>{
    const response = await TogetherWebAPI.get(`dev/fundraising?pagination=${pagination}&limit=${limit}`);
    dispatch({type : Fetch_Fundraising , payload : response.data});
}