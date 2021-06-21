/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../../index.css';
import { BrowserRouter as Router, Switch, Route,NavLink ,Redirect} from "react-router-dom";
import image1 from '../../images/cpu.png';
import image2 from '../../images/idea.png';
import image3 from '../../images/drone.png';
function Isropage() {
    const ISRO_EEE = {
        pathname: "/Eeepage",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"ISRO",
             branch:"EEE"
         }
      };
      const  ISRO_ECE = {
        pathname: "/Ecepage",
        key: '12', // we could use Math.random, but that's not guaranteed unique.
         state:{
             cource:"ISRO",
             branch:"ECE"
         }
      };
      
    return (
        <div style={{backgroundColor:'#5DADE2',paddingTop:'10%',paddingBottom:'20%'  }}>
       
        <div  className="container">
             <div  className="box">
        <NavLink to={ISRO_ECE} style={{textDecoration:'none'}}>
         <img src={image1} className="image"/>
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>ECE</h2>
          </NavLink>
            </div> 
             <div  className="box">
                 <NavLink to={ISRO_EEE} style={{textDecoration:'none'}}>
                 <img src={image2} className="image"/>
            
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>EEE</h2>
          </NavLink>
         </div> 
              
        </div>
          
  </div>
    )
}

export default Isropage;
