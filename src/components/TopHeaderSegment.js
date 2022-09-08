import React from "react";

import '../css/tophederSegment.css';

const TopHeaderSegment = ( { title , description , buttonName } ) =>{


    return (
    <div className="ui segment topsegment">
        <h1 className="ui header header"> {title} </h1>
        <div className="description"> {description} </div>
        <button className="ui basic button topSegment-button"> {buttonName} </button>
    </div>
    )
}

export default TopHeaderSegment;