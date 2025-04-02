import React from 'react';
import HomeNavbar from '../Components/HomeNavbar';
import Button from '../Components/Buttons';
import { Link } from 'react-router-dom';
import Shield from '../assets/Images/shield.png';

const Home = () => {
  return (
    <>
     <HomeNavbar/>
     <div className="header"> 
      <div className="container">
        <div className="row">
          <div className="col-lg col-md">
             <div className="header-text">
             <h3>Your legacy deserves a secure tomorrow.</h3>
             <p>Your digital assets deserve the same protection as your physical assets.</p>
             <p>Automate inheritance, stay compliant, and secure your wealth with AI-powered smart contracts and blockchain technology</p>
            </div>
            <Link to="/signup">
                  <Button type="secondary" onClick={() => handleClick('Primary')}>
                    Get Early Access
                  </Button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      </div>
      <section id='sec1'>
        <div className="container">
          <div className="row"> 
          <h1>Your wealth, Your rules, Your future.</h1>
          <div className="sec1-text">
            <h3>Don't let your legacy become another statistic.</h3>
            <p>Imagine a world where your loved ones never worry 
                about accessing your digital wealth. CIP bridges the gap, 
                ensuring your assets are secure, accessible, and ready to 
                be passed on effortlessly.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
           <div className="sec1-img">
             <img src={Shield} alt="shield-photo" style={{width: "1050px"}} />
           </div>
        </div>

        <div className="col-lg-8"></div>
        </div>
      </section>
    </>
  )
}

export default Home
