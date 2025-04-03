import React from 'react';
import Welcome from '../Components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../assets/Images/logo.png';
import Davido from '../assets/Images/davido.mp3';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="" style={{backgroundColor: "black", height: "100vh"}}> 
    <div className="home-container" style={{ backgroundColor: "black", height: "100vh"}}> 
    <div className='container'>
       <div className="row" id='home-row'>
        < Welcome />
         <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="tool-tip"> 
            <div className="video-tutorial">
                <div className="img-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="video-text">
                    <div className="text-video">
                    <h3 className='video-title'>Watch Tutorial</h3>
                    <p className='video-subtitle'>Take a brief tour on how things work with us.</p>
                    </div>
                
                <div className="video-box" >
                    <iframe src={Davido} frameborder="0"></iframe>
                </div>
                <div class=" tooltip-btn d-grid gap-3 col-8 m-3 col-sm-12 px-5">
                <Link to="/signup" className='text-light' 
                  style={{textDecoration: "none"}}>
                <button className="btn btn" type="button" id='btn3' >
                  <span style={{fontSize: "18px"}}> 
                  Get Started
                  </span>
                </button>
                </Link> 
                <Link to="/signup" className='text-light'
                 style={{textDecoration: "none"}}>
              <button className=" btn-outline" type="button" id='btn2'>
                  <span style={{fontSize: "18px"}}>
                 Skip Tutorial
                 </span>
            </button>
            </Link>
              </div>
              </div>
              </div>
            </div>
         </div>
       </div>
    </div>
    </div>
    </div>
  )
}

export default GetStarted;
