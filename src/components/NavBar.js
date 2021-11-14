/* eslint-disable jsx-a11y/alt-text */
import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import Image1 from '../images/logo.png'
function NavBar() {
     const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
         <>

            <nav className="navbar">
                <div className="nav-container">
                        <div style={{marginRight:'50%',marginLeft:'5%'}}>
                           <NavLink to="/Home"> <img src={Image1} className="nav-logo"/></NavLink> 
                        </div>

                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className="nav-item"><NavLink exact to="/Home" activeClassName="active"  className="nav-links"  > Home </NavLink></li>
                                <li  className="nav-item"><NavLink exact to="/About" activeClassName="active" className="nav-links"   >  About </NavLink></li>
                                <li  className="nav-item"><NavLink exact to="/Contact" activeClassName="active" className="nav-links"   >  Contact </NavLink></li>
                            </ul>
                            <div className="nav-icon" onClick={handleClick}>
                                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>

                            </div>
                </div>
            </nav>




         </>
    )
}

export default NavBar
