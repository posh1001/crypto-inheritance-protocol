import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const SelectionNavbar = () => {
  return (
    <div>
       <div>
       <div>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor: "black"}}>
        <div class="container-fluid">
        <div className="profile-info">
       <Link to="/">
        <img src={Logo} alt="logo"/>
       </Link>
    </div>
        <div className="profile">
          <p className="profile-name"><span className='greeting p-2'>Hello,</span>Poche</p>
          <span className="profile-picture"></span>
          <FontAwesomeIcon icon={faChevronDown} className='profile-list'/>
        </div>
        
  </div>
  </nav>
    </div>
    </div>
    </div>
  )
}

export default SelectionNavbar;
