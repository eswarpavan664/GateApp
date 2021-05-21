/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

 
import "./App.css";
// import NavBar from "./components/NavBar";
 
 
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact"; 
import Gatepage from "./components/pages/Gatepage"; 
import Ecspage from "./components/pages/unknowpage";
import unknowpage from "./components/pages/unknowpage";
import Ecepage from "./components/pages/Ecepage";
import Eeepage from "./components/pages/Eeepage" ;
import Instrumentationpage from "./components/pages/Instrumentationpage"; 
import practice from "./components/pages/practice";
import test from "./components/pages/test";
import Image3 from './images/logo.png'
import NavBar from "./components/NavBar";
function App() {
  return (
     <>
    <Router>
         <NavBar/>
         
        <Switch>
          <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/contact" component={Contact}/>
             <Route path="/Gatepage" component={Gatepage}/>
             <Route path="/Ecspage" component={Ecspage}/>
             <Route path="/unknowpage" component={unknowpage}/>
             <Route path="/Ecepage" component={Ecepage}/>
             <Route path="/Eeepage" component={Eeepage}/>
             <Route path="/Instrumentationpage" component={Instrumentationpage}/>
              <Route path="/practice" component={practice}/>
             <Route path="/test" component={test}/>

        </Switch>
       
     </Router>

     <section>

         <footer class="footer-distributed">

                  <div class="footer-left">
                              <img src={Image3} className="image"/>
                          <h3>About<span>ADBC TEST</span></h3>

                          <p class="footer-links">
                            <a href="#">Home</a> 
                            |
                            <a href="#">About</a>
                            |
                            <a href="#">Contact</a>
                          </p>

                          <p class="footer-company-name">© 2019 ABCD TEST Learning Solutions Pvt. Ltd.</p>
                        </div>

              <div class="footer-center">
                <div>
                  <i class="fa fa-map-marker"></i>
                    <p><span>309 - Vissakoderu,
                    Bldg. No. A - 1, Sector - 1</span>
                    </p>
                </div>

                <div>
                  <i class="fa fa-phone"></i>
                  <p>+91 9491662643</p>
                </div>
                <div>
                  <i class="fa fa-envelope"></i>
                  <p><a href="mailto:support@eduonix.com">support@abcdtest.com</a></p>
                </div>
              </div>
              <div class="footer-right">
                <p class="footer-company-about">
                  <span>About the Website</span>
                  We are try to increase your knowlage for gate preparation </p>
                <div class="footer-icons">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                  <a href="#"><i class="fa fa-youtube"></i></a>
                </div>
              </div>
	    	</footer>
     </section>
     </>
  )
}

export default App
