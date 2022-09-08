import React , {Component} from "react";

import TopHeaderSegment from "./TopHeaderSegment";
//to get desctions&title names 
import { 
    TopSegment_description,
    TopSegment_title,
    TopSegment_buttonName
 } from "../DescrptionsAndTitles/descriptions";

class App extends Component {

    render(){
        return(
            <div className="ui container">
                <TopHeaderSegment 
                title={TopSegment_title}
                buttonName={TopSegment_buttonName}
                description={TopSegment_description}
                />
            </div>
        )
    }
}

export default App;