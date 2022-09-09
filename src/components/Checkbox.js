import React, { Component } from "react";
import {connect} from "react-redux";

class Checkbox extends Component{

    render(){
       
    const x=this.props.seleted_value===this.props.price ? true : false;
    return (
        <div className="ui form">
                         <div className="field">
                         <div className="ui radio checkbox">
                         <input type="radio" checked={x}
                         onChange={()=>{}}
                         />
                         <label className="meta">${this.props.price}</label>
                          </div>
                          </div> 
        </div>
    )}
}

const mapStateToProps = state => {
    return {seleted_value : state.Seleted_redio}
}

export default connect(mapStateToProps)(Checkbox);