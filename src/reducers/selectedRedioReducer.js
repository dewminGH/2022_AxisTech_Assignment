import { Selected_redio_box } from "../types/types";

const selectedRedioboxReducer = (state=null , action) =>{
           if(action.type===Selected_redio_box )
           return action.payload;
           return state;
} 

export default selectedRedioboxReducer;