import React , {Component} from "react";

import TopHeaderSegment from "./TopHeaderSegment";
import ProjectList from "./ProjectList";
//to get descptions&title names 
import { 
    TopSegment_description,
    TopSegment_title,
    TopSegment_buttonName,
    TopSegment_logo_path
 } from "../DescrptionsAndTitles/descriptions";


class App extends Component {

    render(){
        return(
            <div className="ui container">

                <TopHeaderSegment 
                title={TopSegment_title}
                buttonName={TopSegment_buttonName}
                description={TopSegment_description}
                src={TopSegment_logo_path}
                />
                
                <ProjectList/>
            </div>
        )
    }
}

export default App;