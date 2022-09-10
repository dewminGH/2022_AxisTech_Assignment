import { Themes } from "../types/types";

const colorThemeReducer = (state='bright',action)=>{
    if(action.type=== Themes)
    return action.payload;
    return state;
}
export default colorThemeReducer;