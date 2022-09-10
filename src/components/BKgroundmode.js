import React, { Component } from "react";
import {connect} from "react-redux";

import { ColorMode } from "../actions";
import '../css/backgroundmode.css';
class BackGroundMode extends Component{

    render(){
        const mode= this.props.Current_theme==='bright' ? 'dark' : 'bright';
        const BG= this.props.Current_theme==='bright' ? 
        {BGcolor:'white' , icon : {type : 'sun' , color : '#AF93FF'}} :
        {BGcolor:'black' , icon :{type : 'moon' , color : '#818BE9'}};
        return(
            <div className="ui right aligned  segment segment-chkbox" 
            style={{backgroundColor: BG.BGcolor}}>
              <i className={`${BG.icon.type} icon large`}
              style={{color: BG.icon.color}}></i>
              <div className="ui toggle checkbox" onClick={()=> this.props.ColorMode(mode)}>
               <input type="checkbox" name="public" />
                 <label></label>
               </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {Current_theme : state.Theme}
}

export default connect(mapStateToProps , {ColorMode} )(BackGroundMode);