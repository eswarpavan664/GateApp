/* eslint-disable react/jsx-no-duplicate-props */
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
 
import { Carousel } from 'antd';
 
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Home() {
   
  return (
          
          <section style={{backgroundColor:'#5DADE2',paddingTop:'10%',paddingBottom:'20%'  }}>     
     
     <div id="carouselExampleIndicators" class="carousel slide"  data-ride="carousel"  id="slider">

          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
         
          <div class="carousel-inner"  >
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/09/909596-gate-exam-2021-admit.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2019/01/09171711/ISRO-Exam-Pattern.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://www.exams88.in/wp-content/uploads/2018/01/IES-2021.jpg" alt="Third slide"/>
            </div>
          </div>

          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>















           
              <div className="container">
                    <div  className="box">

                          
                          <NavLink to="/Gatepage" style={{textDecoration:'none'}}>
                                    <img src={Image1} className="image"/>
                                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold',fontFamily:'Tourney  cursive' }}>GATE</h2>
                        </NavLink>
                    </div>



                        <div className="box">
                            <NavLink to="/Esepage" style={{textDecoration:'none'}}>
                                <img src={Image3} className="image"/>
                        
                                  <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold',fontFamily:'Tourney  cursive'}}>ESE</h2>
                          </NavLink>
                        </div> 


                    <div className="box">
                          <NavLink to="/Isropage" style={{textDecoration:'none'}}>
                              <img src={Image2} className="image"/>
                    
                                <h2 style={{textAlign:'center',color:'black',marginTop:'15%',fontWeight:'bold',fontFamily:'Tourney  cursive' }}> ISRO</h2> 
                          </NavLink>
                    </div> 
   
              </div>

          </section>

      
  )
}

export default Home;
