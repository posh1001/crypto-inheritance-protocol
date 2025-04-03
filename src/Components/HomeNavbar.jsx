import React from 'react';
import Logo from '../assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from '../Components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightToBracket} from '@fortawesome/free-solid-svg-icons';

const HomeNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <Link to="/"> 
         <img src={Logo} alt="logo" style={{width: "315px", padding: "10px"}}/>
      </Link>
    </div>
    <div className="nav navbar-nav navbar-right d-flex" style={{ alignItems: "center", flexDirection: "row", gap: "65px"}}>
    <Link to="/signup"><button type='Primary' id='nav-btn'><FontAwesomeIcon icon={faUser} style={{color: "rgba(255, 255, 255, 1)"}}/>Sign Up</button></Link>
     <Link to="/login"> <button id='nav-btn'><FontAwesomeIcon icon={faRightToBracket} style={{color: "rgba(255, 255, 255, 1)"}}/> Login</button></Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default HomeNavbar;