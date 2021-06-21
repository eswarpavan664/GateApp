/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {NavLink } from "react-router-dom";
import '../../index.css';
import image1 from '../../images/cpu.png';
import image2 from '../../images/idea.png';
import image3 from '../../images/drone.png';
function Gatepage() {
    const GATE_EEE = {
        pathname: "/Eeepage",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"GATE",
             branch:"EEE"
         }
      };
      const GATE_ECE = {
        pathname: "/Ecepage",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"GATE",
             branch:"ECE"
         }
      };
      const GATE_IN = {
        pathname: "/Instrumentation",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"GATE",
             branch:"IN"
         }
      };
    return (
        <div style={{paddingTop:'10%',paddingBottom:'20%'  }}>
        
        <div  className="container">
             <div className="box">
        <NavLink to={GATE_ECE} style={{textDecoration:'none'}}>
         <img src={image1} className="image"/>
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>ECE</h2>
          </NavLink>
            </div> 


             <div className="box">
                 <NavLink  to={GATE_EEE} style={{textDecoration:'none'}}>
                 <img src={image2} className="image"/>
            
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>EEE</h2>
          </NavLink>
       </div> 


             <div className="box">
                <NavLink to={GATE_IN} style={{textDecoration:'none'}}>
               <img src={image3} className="image"/>
            
               <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>IN</h2> 
            </NavLink>
            </div> 
        </div>
          <div>
            
          
        </div>
  </div>
    )
}

export default Gatepage;
