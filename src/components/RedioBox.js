import React, { Component } from "react";
import {connect} from "react-redux";

class Rediobox extends Component{

    render(){
       
    const x=this.props.seleted_value===this.props.price ? true : false;
    const Text_color= this.props.Current_theme==='bright' ? 'black' : '#B2B4BA';   //color change due to theme change
    return (
        <div className="ui form">
                         <div className="field">
                         <div className="ui radio checkbox">
                         <input type="radio" checked={x}
                         onChange={()=>{}}
                         />
                         <label className="meta" style={{color:Text_color}}>${this.props.price}</label>
                          </div>
                          </div> 
        </div>
    )}
}

const mapStateToProps = state => {
    return {seleted_value : state.Seleted_redio , Current_theme : state.Theme}
}

export default connect(mapStateToProps)(Rediobox);