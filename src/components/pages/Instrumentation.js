/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import '../../index.css';
import {
  Route,
  NavLink,
  HashRouter,
  useLocation
} from "react-router-dom";
import image1 from '../../images/cpu.png';
import image2 from '../../images/idea.png';

import practice from "./practice";
import test from "./test";
function Instrumentation(){
  let location = useLocation();
     
  const  Cource=location.state.cource;
  const  Branch=location.state.branch;
  const SETQUESTION = {
    pathname: "/practice",
    key: '12',  
     state:{
         cource:Cource,
         branch:Branch
     }
  };
    return (
      <div style={{backgroundColor:'#5DADE2',paddingTop:'10%',paddingBottom:'20%'  }}>
         <h1 class="text-center" style={{marginTop:'2%',fontFamily:'-moz-initial',color:'green',fontWeight:'bold',fontSize:55}}>{Cource} {Branch}</h1>
       
        <div   className="container">
             <div  className="box">
                <NavLink  to={SETQUESTION} 
                
                
                
                
                
                style={{textDecoration:'none'}}>
                  <img src={image1} className="image"/>
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>Practice</h2>
               </NavLink>
            </div> 

        <div  className="box">
                 <NavLink to="/test" style={{textDecoration:'none'}}>
                 <img src={image2} className="image"/>
            
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>Test</h2>
          </NavLink>
       </div> 
             
        </div>
          <div>
            
           
        </div>
  </div>
    );
  
}

export default  Instrumentation;