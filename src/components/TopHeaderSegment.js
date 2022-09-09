import React, { Component } from "react";

import '../css/tophederSegment.css';

class TopHeaderSegment extends Component {

    

    render(){
        const  { title , description , buttonName , src } = this.props;
    return (

    <div className="ui segment topsegment">

        <div className="ui two column stackable center aligned grid">
        <div className="middle aligned row">

                    <div className="column">
                    <img  className='ui medium circular image topsegment-logo'src={src}  
                    alt="sad Broken </3"  />
                    </div>

                    <div className="column topsegment-leftCol">
                    <h1   className="ui header left floted topsegment"> {title} </h1>
                    <div className="description"> {description} </div>
                    <button className="ui basic button topSegment-button "> {buttonName} </button>
                    </div>

         </div>     
         </div>
    </div>
    )
    }
}

export default TopHeaderSegment;