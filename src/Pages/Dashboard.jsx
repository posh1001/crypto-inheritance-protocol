import React from 'react';
import Logo from '../assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faCoins, faChevronDown, faBell } from '@fortawesome/free-solid-svg-icons';
import Vector from '../assets/Images/vector.png'
import Component from '../assets/Images/component 1.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="" style={{backgroundColor: "black", height: "100vh", overflow: "hidden"}}> 
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4">
                <div className="dashboard-menu">
                <div className="brand-logo">
                   <Link to="/"><img src={Logo} alt="logo" /></Link>
                </div>
                    <div className="dashboard">
                    <button class="btn btn" type="button" id="">
                      <FontAwesomeIcon icon={faHouse} className='house'/>
                    <span className='dashboard-text' style={{color: "rgba(255, 255, 255, 1)", }}>
                    Dashboard</span>
                   </button>

                    <div className="plans d-flex">
                    <FontAwesomeIcon icon={faCoins} className='coins'/>
                    <p>Plans</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="dashboard-header">
                    <p className='dashboard-title'>Dashboard</p>
                 <div className="Profile">
                          <FontAwesomeIcon icon={faBell} className='profile-list'/>
                          <p className="profile-name"><span className='greeting p-2'>Hello,</span>Poche</p>
                          <span className="profile-picture"></span>
                          <FontAwesomeIcon icon={faChevronDown} className='profile-list'/>
                </div>
            </div>
            <div className="upgrade-plan">
                    <img src={Vector} alt="image" />
                    <p>Upgrade Plan</p>
                </div>
            <div className="component ">
                <img src={Component} alt="img"/>
                <p className=''>You Do Not Have Any Asset Here</p>
               <Link to="/connect-wallet2">
               <button class="btn btn text-white" type="button" 
                style={{fontFamily: "Space Grotesk, sans-serif;",
                fontSize: "16px", fontWeight: "700"}} id='dashboard-btn'>
                Add Asset</button>
               </Link>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard;
