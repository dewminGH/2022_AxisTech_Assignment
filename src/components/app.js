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

 import '../css/app.css';

class App extends Component {

    render(){
        //color change due to theme change
        const Theme= this.props.Current_theme==='bright' ? 
        {BG_color:'white' , Header_color : 'black'} : {BG_color:'black' , Header_color : 'white'};
        return(
            <div style={{backgroundColor: Theme.BG_color}}>
            <div className="ui container" >

                <BackGroundMode title='Togther We'/>
                <TopHeaderSegment 
                title={TopSegment_title}
                buttonName={TopSegment_buttonName}
                description={TopSegment_description}
                src={TopSegment_logo_path}
                />
                <h1 className="ui heder app-header" style={{color:Theme.Header_color}}> Projects</h1>
                <ProjectList/>

            </div></div>
        )
    }
}

const mapStateToProps = state =>{
    return {Current_theme : state.Theme}
}
export default connect(mapStateToProps)(App);