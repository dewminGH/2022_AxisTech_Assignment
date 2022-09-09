import { 
    Fetch_Fundraising,
    Fetch_donteAmounts,
    Selected_redio_box,
    Donate_money
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

export const donateMoney = (id , amount)=> async dispatch =>{
    const response = await TogetherWebAPI.post('dev/donate' , {
         fundraisingItemId : id,
         amount : amount})
    dispatch({type : Donate_money , payload : response.data})
}



//local to get seleted value--
export const selectedRediobox = (value) =>{
    return {type : Selected_redio_box , payload : value }
}
