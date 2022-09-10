import React , {Component} from "react";
import {connect} from "react-redux";

import TopHeaderSegment from "./TopHeaderSegment";
import ProjectList from "./ProjectList";
import BackGroundMode from "./BKgroundmode";
//to get descptions&title names 
import { 
    TopSegment_description,
    TopSegment_title,
    TopSegment_buttonName,
    TopSegment_logo_path
 } from "../DescrptionsAndTitles/descriptions";


class App extends Component {

    render(){
        const BG_color= this.props.Current_theme==='bright' ? 'white' : 'black';
        return(
            <div style={{backgroundColor: BG_color}}>
            <div className="ui container" >

                <BackGroundMode/>
                <TopHeaderSegment 
                title={TopSegment_title}
                buttonName={TopSegment_buttonName}
                description={TopSegment_description}
                src={TopSegment_logo_path}
                />
                <ProjectList/>

            </div></div>
        )
    }
}

const mapStateToProps = state =>{
    return {Current_theme : state.Theme}
}
export default connect(mapStateToProps)(App);