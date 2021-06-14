/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import '../../index.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import image1 from '../../images/cpu.png';
import image2 from '../../images/idea.png';

import practice from "./practice";
import test from "./test";
class   Ecepage extends Component {

  render() {
    return (
      <div style={{backgroundColor:'#5DADE2',paddingTop:'10%',paddingBottom:'20%'  }}>
       
        <div  className="container">
             <div  className="box">
        <NavLink  to={{

        pathname:"/practice",
        pagename:{
          name:"ECE"
        }
        }} 
        
        
        
        style={{textDecoration:'none'}}>
         <img src={image1} className="image"/>
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>Practics</h2>
          </NavLink>
            </div> 
             <div className="box">
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
}

export default   Ecepage;