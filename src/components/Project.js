import React, { useState } from "react";
import { connect } from "react-redux";

import Checkbox from "./Checkbox";

import {  
    donateAmounts , 
    selectedRediobox ,
    donateMoney
} from "../actions";

import '../css/projectCard.css';
import { 
    PayNow_cardName,
    Donated_img_path,
    Donate_Successful_msg
} from '../DescrptionsAndTitles/descriptions';





const Project = ( 
    { project , donateAmounts , prices , selectedRediobox , donateMoney , selected_donate_amount }
     ) =>{
    //this state pice only use this compoenent to find current
    //Design on card
    const [CardName,SetCardname]=useState('donatenow');


    let { id , title , urls ,target_amount } = project;
    if(!title)
    title="Untitled Program";


    //helper methods 
    //set CardNames use to change views 
    const DonateOnClick = () =>{ 
        SetCardname('paynow');
        donateAmounts();
    }

    const PayNowOnClick = () =>{
        SetCardname('done');
        donateMoney( id , selected_donate_amount); 
    }

    const DonateSuccessfullOnClick = () =>{
        SetCardname('donatenow');
    }


    //Donate JSX View 1
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
   

    //payment JSX view 2
    const PayNow = ()=>{ 
    //for initial render setup
    if(!prices){
        return null;
    }
     const RenderAmounts = prices.data.map( price => {
      return (<div onClick={()=>selectedRediobox(price)} key={price}>
        <Checkbox price={price} />
        </div>)
       })
           return (     
            <div className="content">
            <i className="times circle outline icon" 
            onClick={()=> SetCardname('donatenow')}></i>       
             <div className="header top-bot-margin">{PayNow_cardName}</div>
                        {RenderAmounts}
             <button className="ui violet button payment-button top-margins"
             onClick={()=> PayNowOnClick()}>Pay Now</button>
             </div>
           )
    }


    //Payment done JSX view 3
    const DonateSuccessfull = ()=>{

        return(
            <>
             <div className="image projectCard">
                     <img src={Donated_img_path}  alt="sad broken </3"/>
            </div>
            <div className="content">
                <div className="header donate-msg top-bot-margin">
                     {Donate_Successful_msg}
                </div>
                <button className="ui violet button paymentDone-button top-margins"
                onClick={()=>DonateSuccessfullOnClick()}
                 >Done</button>
            </div>
            </>
        )
    }

    //Crad View Select
    const CardView = () =>{
        if(CardName==='paynow') // view 1
        return PayNow()
        if(CardName==='donatenow') // view 2
        return DonateNow()
        if(CardName==='done')
        return DonateSuccessfull() // view 3
    }


    return   (
        <div className="column" >
        <div className="ui fluid card card-frame">
         {CardView()}
        </div>
      </div>)
}


const mapStateToProps = state =>{
    return{ 
        prices : state.Fetch_DonateAmoutes.data ,
        selected_donate_amount : state.Seleted_redio}
}

export default connect ( mapStateToProps , {donateAmounts,selectedRediobox,donateMoney} ) (Project);