import { Donate_money } from "../types/types"
const donateMoneyReducer = (state=null,action)=>{
    if(action.type===Donate_money)
    return action.payload;
    return state;
}

export default donateMoneyReducer;