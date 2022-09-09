import React from "react";

const  Checkbox = ( {price} )=>{

    return (
        <div className="ui form">
                         <div className="field">
                         <div className="ui radio checkbox">
                         <input type="radio" name="example2" checked="checked" />
                         <label className="meta">${price}</label>
                          </div>
                          </div>
        </div>
    )
}
export default Checkbox;