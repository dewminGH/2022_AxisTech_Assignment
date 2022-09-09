import React, { useState } from "react";
import { connect } from "react-redux";

import Checkbox from "./Checkbox";

import {  donateAmounts } from "../actions";
import '../css/projectCard.css';
import { PayNow_cardName } from '../DescrptionsAndTitles/descriptions'

const Project = ( { project , donateAmounts , prices } ) =>{
    //this state pice only use this compoenent to find current
    //Design on card
    const [CardName,SetCardname]=useState('donatenow')


    let { id , title , urls ,target_amount } = project;
    if(!title)
    title="Untitled Program";

    const DonateOnClick = () =>{
        SetCardname('paynow');
        donateAmounts();
    }

    //donate JSX
    const DonateNow = () =>{
        return(
            <>
            <div className="image projectCard">
                     <img src={urls.regular}  alt="sad broken </3"/>
            </div>
            <div className="content">
            <div className="header">{title}</div>

                <i className="dollar sign icon"></i>{target_amount}
                <div className="meta" style={{display:'inline'}}> Rasised</div>

            <button className="ui violet button donate-button top-margins"
            onClick={ () =>DonateOnClick()}>Donate Now</button>
            </div>
            </>
        )
    }
   

    //payemnt JSX
    const PayNow = ()=>{ 
    //for initial render setup
    if(!prices){
        return null;
    }
     const RenderAmounts = prices.data.map( price => {
      return <Checkbox price={price}/>
       })
           return (     
            <div className="content">
            <i className="times circle outline icon" 
            onClick={()=> SetCardname('donatenow')}></i>       
             <div className="header top-bot-margin">{PayNow_cardName}</div>
                        {RenderAmounts}
             <button className="ui violet button payment-button top-margins">Pay Now</button>
             </div>
           )
    }

    const CardOutPut = () =>{
        if(CardName==='paynow')
        return PayNow()
        if(CardName==='donatenow')
        return DonateNow()
    }
    return   (
        <div className="column" >
        <div className="ui fluid card">
         {CardOutPut()}
         {console.log(CardName)}
         {console.log(prices)}
        </div>
      </div>)
}


const mapStateToProps = state =>{
    return{ prices : state.Fetch_DonateAmoutes.data}
}

export default connect ( mapStateToProps , {donateAmounts} ) (Project);