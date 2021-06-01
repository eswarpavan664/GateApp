/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import Gatepage from "./Gatepage"; 
import Ecspage from "./unknowpage";
import unknowpage from "./unknowpage";
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
  let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
  return (
          
          <section style={{backgroundColor:'#5DADE2'  }}>     


        

            <div style={{marginTop:'4%'}}>
             
            </div>
            <Carousel slides={slides} autoplay={true} interval={3000}/>
           

          




          <div className="container">
                <div  className="box">

                       
                      <NavLink to="/Gatepage" style={{textDecoration:'none'}}>
                                 <img src={Image1} className="image"/>
                            <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>GATE</h2>
                     </NavLink>
                </div>



                    <div className="box">
                        <NavLink to="/Ecspage" style={{textDecoration:'none'}}>
                             <img src={Image3} className="image"/>
                    
                               <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold'}}>ESE</h2>
                       </NavLink>
                     </div> 


                <div className="box">
                       <NavLink to="/unknowpage" style={{textDecoration:'none'}}>
                           <img src={Image2} className="image"/>
                
                             <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold' }}> ISRO</h2> 
                       </NavLink>
                </div> 
                 <div>
            <Route path="/Gatepage" component={Gatepage}/>
            <Route path="/Ecspage" component={Ecspage}/>
            <Route path="/unknowpage" component={unknowpage}/>
          </div>
            
        </div>
        </section>

      
  )
}

export default Home;
