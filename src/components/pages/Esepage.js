/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { BrowserRouter as Router, Switch, Route,NavLink ,Redirect} from "react-router-dom";
import image1 from '../../images/cpu.png';
import image2 from '../../images/idea.png';
import image3 from '../../images/drone.png';
import '../../index.css';
function Esepage() {
    const ESE_EEE = {
        pathname: "/Eeepage",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"ESE",
             branch:"EEE"
         }
      };
      const  ESE_ECE = {
        pathname: "/Ecepage",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"ESE",
             branch:"ECE"
         }
      };
      
    return (
        <div style={{paddingTop:'10%',paddingBottom:'20%'  }}>
        
        <div  className="container">
             <div className="box">
        <NavLink to={ESE_ECE} style={{textDecoration:'none'}}>
         <img src={image1} className="image"/>
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>ECE</h2>
          </NavLink>
            </div> 


             <div className="box">
                 <NavLink  to={ESE_EEE} style={{textDecoration:'none'}}>
                 <img src={image2} className="image"/>
            
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>EEE</h2>
          </NavLink>
       </div> 


            
        </div>
          
            
          
  </div>
    )
}

export default Esepage;
