import React from 'react';
import HomeNavbar from '../Components/HomeNavbar';
import Button from '../Components/Buttons';
import { Link } from 'react-router-dom';
import Shield from '../assets/Images/shield.png';

const Home = () => {
  return (
    <>
     <HomeNavbar/>
     <div className="main-header"> 
      <div className="container" style={{backgroundImage: "url(./assets/Images/headers.wepb)"}}>
          <div className="col-lg col-md">
             <div className="main-header-text">
             <h3>Your legacy deserves a secure tomorrow.</h3>
             <p>Your digital assets deserve the same protection as your physical assets.</p>
             <p>Automate inheritance, stay compliant, and secure your wealth with AI-powered smart contracts and blockchain technology</p>
            </div>
            <Link to="/get-started">
                  <Button type="secondary" onClick={() => handleClick('Primary')}>
                    Get Early Access
                  </Button>
            </Link>
          </div>
      </div>
      <br />
      <br />
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
        </div>
       <br />
       <div className="row">
         <div className="d-flex justify-content-between">
       <div className="col-lg-4 col-md-4">
           <div className="sec1-img py-5">
             <img src={Shield} alt="shield-photo" style={{width: "1050px"}} />
           </div>
        </div>
       <br />
        <div className="col-lg-8 col-md-8 py-5" 
        style={{position: "relative", top: "5rem", width: "850px",}}>
        <h3 
        style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "38px"}}>
          Built for the future, designed for peace of mind.
        </h3>
             <p style={{fontFamily: "Lato, sans-serif", fontSize: "23px", padding: "10px"}}>CIP is pioneering a secure, tamper-proof crypto inheritance 
              protocol that ensures your assets are protected for generations
              to come. With cutting-edge infrastructure, it guarantees that 
              your digital wealth is safe, sustainable, and future-proof.
            </p>
        </div>
        </div>
        </div>
      </section>

      <section id='new-sec'>
        <div className="container">
        <div className="row" id='sec2'>
          <div className="col-lg-6 col-md-6">
            <h3>Ready to Secure Your Tomorrow? Here is How It Works:</h3>
          </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <ul>
                   <li>
                <p>Register your assets on our secure platform.</p>
            </li>
         <li>
           <p>Let AI craft a custom inheritance plan tailored to your needs.</p>
              </li>
                  <li>
                     <p>Smart contracts ensure your assets are transferred when life
                        events occur.</p>
                          </li>
                        <li>
                     <p>Legal templates validate the process to prevent disputes.</p>
                 </li>
              </ul>
          </div>
         </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home
