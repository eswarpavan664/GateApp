/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Route, BrowserRouter as Router, Switch ,Redirect} from "react-router-dom";

 
import "./App.css";
// import NavBar from "./components/NavBar";
 
import {Component} from 'react'; 
 
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact"; 
import Gatepage from "./components/pages/Gatepage"; 
import Esepage from "./components/pages/Esepage";
import Isropage from "./components/pages/Isropage";
import Ecepage from "./components/pages/Ecepage";
import Eeepage from "./components/pages/Eeepage" ;
import Instrumentation from "./components/pages/Instrumentation"; 
import practice from "./components/pages/practice";
import test from "./components/pages/test";
import Image3 from './images/logo.png'
import NavBar from "./components/NavBar";


class App extends Component {
  

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <div>
            
            
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/Home" /> 
                       
                    )
                }}
              />
               <Route exact path="/home" component={Home} />
               <Route path="/About" component={About}/>
            <Route path="/contact" component={Contact}/>
             <Route path="/Gatepage" component={Gatepage}/>
             <Route path="/Esepage" component={Esepage}/>
             <Route path="/Isropage" component={Isropage}/>
             <Route path="/Ecepage" component={Ecepage}/>
             <Route path="/Eeepage" component={Eeepage}/>
             <Route path="/Instrumentation" component={Instrumentation}/>
              <Route path="/practice" component={practice} />
             <Route path="/test" component={test}/>
               
            </Switch>
          </div>
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
      </div>
    );
  }
}

export default App;