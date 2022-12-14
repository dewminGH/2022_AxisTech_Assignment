import React, { useState } from "react";
import { connect } from "react-redux";

import RedioBox from "./RedioBox";

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
    { project , donateAmounts , prices , selectedRediobox , donateMoney , selected_donate_amount , Current_theme }
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
         //color change due to theme change
        const Text_color= Current_theme==='bright' ? 'black' : '#B2B4BA';
        return(
            <>
            <div className="image projectCard">
                     <img src={urls.regular}  alt="sad broken </3"/>
            </div>
            <div className="content" style={{color:Text_color}}>
            <div className="header"  style={{color:Text_color}}>{title}</div>

                <i className="dollar sign icon"></i>{target_amount}
                <div className="meta" style={{display:'inline' , color:Text_color}}> Rasised</div>

            <button className="ui violet button donate-button top-margins mobile-button"
            onClick={ () =>DonateOnClick()}>Donate Now</button>
            </div>
            </>
        )
    }
   

    //payment JSX view 2
    const PayNow = ()=>{ 
    //for initial render setup
    const Text_color= Current_theme==='bright' ? 'black' : '#B2B4BA';
    //color change due to theme change
    if(!prices){
        return null;
    }
     const RenderAmounts = prices.data.map( price => {
      return (<div onClick={()=>selectedRediobox(price)} key={price}>
        <RedioBox price={price} />
        </div>)
       })
           return (     
            <div className="content" style={{color:Text_color}}>
            <i className="times circle outline icon" 
            onClick={()=> SetCardname('donatenow')}></i>       
             <div className="header top-bot-margin mobile-view2-title" 
             style={{color:Text_color}}>
                {PayNow_cardName}
             </div>
                        {RenderAmounts}
             <button className="ui violet button payment-button top-margins mobile-button"
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
            <div className="content" >
                <div className="header donate-msg top-bot-margin mobile-view3-title">
                     {Donate_Successful_msg}
                </div>
                <button className="ui violet button paymentDone-button top-margins mobile-button"
                onClick={()=>DonateSuccessfullOnClick()}
                 >Done</button>
            </div>
            </>
        )
    }

    //Crad View Select
    const CardView = () =>{
        if(CardName==='paynow') // view 2
        return PayNow()
        if(CardName==='donatenow') // view 1
        return DonateNow()
        if(CardName==='done')
        return DonateSuccessfull() // view 3
    }


    //Project componenet rendering JSX
    //color change to due theme change
    const Card_BG= Current_theme==='bright' ? 
    {color:'white' , boxBorder:''} :  {color:'#2A2D39' , boxBorder:'re-box'};
    return   (
        <div className="column"  >
        <div className={`ui fluid card card-frame ${Card_BG.boxBorder} mobile-card`} 
        style={{backgroundColor:Card_BG.color }}>
         {CardView()}
        </div>
      </div>)
}


const mapStateToProps = state =>{
    return{ 
        prices : state.Fetch_DonateAmoutes.data ,
        selected_donate_amount : state.Seleted_redio,
        Current_theme : state.Theme
    }
}

export default connect ( mapStateToProps , {donateAmounts,selectedRediobox,donateMoney} ) (Project);