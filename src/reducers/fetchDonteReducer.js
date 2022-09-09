import { Fetch_donteAmounts} from "../types/types"
const fetchDonteReducer = (state ={} , action) =>{
    if(action.type===Fetch_donteAmounts)
    return action.payload;
    return state;
}
export default fetchDonteReducer;