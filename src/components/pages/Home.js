/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import Gatepage from "./Gatepage"; 
import Esepage from "./Esepage";
import Isropage from "./Isropage";
import '../../index.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
import Image1 from '../../images/presentation.png';
import Image2 from '../../images/project.png';
import Image3 from '../../images/worker.png';
import foot from "../foot";
import backimg from '../../images/Untitled design.png'
import {Carousel} from '3d-react-carousal';

 

function Home() {
   
  return (
          
          <section style={{backgroundColor:'#5DADE2',paddingTop:'10%',paddingBottom:'20%'  }}>     

              <div className="container">
                    <div  className="box">

                          
                          <NavLink to="/Gatepage" style={{textDecoration:'none'}}>
                                    <img src={Image1} className="image"/>
                                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>GATE</h2>
                        </NavLink>
                    </div>



                        <div className="box">
                            <NavLink to="/Esepage" style={{textDecoration:'none'}}>
                                <img src={Image3} className="image"/>
                        
                                  <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>ESE</h2>
                          </NavLink>
                        </div> 


                    <div className="box">
                          <NavLink to="/Isropage" style={{textDecoration:'none'}}>
                              <img src={Image2} className="image"/>
                    
                                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold' }}> ISRO</h2> 
                          </NavLink>
                    </div> 
              </div>
          </section>

      
  )
}

export default Home;
