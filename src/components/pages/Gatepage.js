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
import image3 from '../../images/drone.png';
import Ecepage from "./Ecepage";
import Eeepage from "./Eeepage";
import Instumentationpage from "./Instrumentation";
class  Gatepage extends Component {

  render() {
    return (
      <div  style={{backgroundColor:'#5DADE2',paddingTop:'10%',paddingBottom:'20%'  }}>
        
        <div  className="container">
             <div className="box">
        <NavLink to="/Ecepage" style={{textDecoration:'none'}}>
         <img src={image1} className="image"/>
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>ECE</h2>
          </NavLink>
            </div> 


             <div className="box">
                 <NavLink to="/Eeepage" style={{textDecoration:'none'}}>
                 <img src={image2} className="image"/>
            
                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>EEE</h2>
          </NavLink>
       </div> 


             <div className="box">
                <NavLink to="/Instrumentatiopage" style={{textDecoration:'none'}}>
               <img src={image3} className="image"/>
            
               <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>IN</h2> 
            </NavLink>
            </div> 
        </div>
          <div>
            
          <div >
            <Route path="/Ecepage" component={Ecepage}/>
            <Route path="/Eeepage" component={Eeepage}/>
            <Route path="/Instrumentatiopage" component={Instumentationpage}/>
          </div>
        </div>
  </div>
    );
  }
}

export default  Gatepage;