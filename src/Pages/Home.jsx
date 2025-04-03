import React from 'react';
import Logo from '../assets/Images/logo.png';
import Shield from '../assets/images/shield.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import HomeNavbar from '../Components/HomeNavbar';
import COTI from '../assets/Images/coti.png';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
       <header className='top-header'>
          <div className="container">
          <HomeNavbar/>
 <div class="col-lg-6 col-md-6">
      <div className="header-details">
      <h1 className='animated-text'>Your legacy deserves a secure tomorrow.</h1>
         <p>Your digital assets deserve the same protection as your physical assets.</p>
            <p>Automate inheritance, stay compliant, and secure your wealth with AI-powered smart contracts and blockchain technology</p>
            <Link to="/get-started" style={{ textDecoration: 'none', color: 'white' }}>
            <button class="btn btn-sm text-white" id='get-started' >
             Get Started 
        </button>
        </Link>
        <p style={{fontFamily: "Lato, sans-serif", color: "white", width: "555px", fontSize: "18px", gridRow: "5px"}}>
         Sponsored by <img src={COTI} alt="img" style={{width: "30px", position: "relative", left: "7px"}}/> 
         <span style={{fontFamily: "Lato, sans-serif", fontSize: "20px", fontWeight: "500", position: "relative", left: "12px", top: "3px"}}>COTI</span>
        </p>
        <br />
      </div>
</div> 
</div>
</header>

  <section className='section3' style={{backgroundColor: "rgb(28, 42, 51)", height: "100%"}}>

     <div class="container">
        <h1 className='second-header'>Your wealth, Your rules, Your future.</h1>
        <div className="second-header2"> 
            <h3>Don't let your legacy become another statistic.</h3>
            <p>Imagine a world where your loved ones never worry 
                about accessing your digital wealth. CIP bridges the gap, 
                ensuring your assets are secure, accessible, and ready to 
                be passed on effortlessly.
            </p>
        </div>
    </div>

    <div style={{backgroundColor: "rgb(28, 42, 51)", height: "100%"}}>
   <div className="container">
<div className="row" id='section3'>
            <div className="col-lg-6 col-md-6 col-sm-12" id='image-container'>
                <img src={Shield} alt="image" style={{ width: "900px"}} className='slide-image'/>
            </div>
             <div className="col-lg-6 col-md-6 col-sm-12" >
             <h3>Built for the future, designed for peace of mind.</h3>
             <p>CIP is pioneering a secure, tamper-proof crypto inheritance 
           protocol that ensures your assets are protected for generations
           to come. With cutting-edge infrastructure, it guarantees that 
            your digital wealth is safe, sustainable, and future-proof.</p>
             </div>
           </div>
           </div>
</div>
</section>


     <section className='section4'>
          <div class="container">
            <div className="row" id="section4-row">
                <div className="col-lg-6 col-md-6 col-sm-12">
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
                 <Link to='/get-started' style={{ textDecoration: 'none', color: 'white' }}>
                      <button type='Primary' class="btn btn-sm text-white" id='section4-btn'>
                      Learn More
                   </button>
                   </Link>
              </ul>
                </div>
             </div>   
        </div>
        </section>
          
         <div className="">
            <Footer/>
         </div>
             </div>        
  )
}


export default Home;
