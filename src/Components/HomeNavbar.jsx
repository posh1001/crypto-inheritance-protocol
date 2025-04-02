import React from 'react';
import Logo from '../assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from '../Components/Buttons';

const HomeNavbar = () => {
  return (
    <>
    <nav class="navbar navbar-light py-5" style={{backgroundColor: "black"}}>
        <div className="container"> 
      <Link to='/'>
        <img src={Logo} width="260px" height="80px" alt="brand-logo"/>
      </Link>
    <Link to="/signup">
      <Button type="primary" onClick={() => handleClick('Primary')}>
       Sign Up
      </Button>
    </Link>
      </div>
   </nav>
    </>
  )
}

export default HomeNavbar;