import React from 'react';
import Logo from '../assets/images/logo.png';
import Shield from '../assets/images/shield.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import HomeNavbar from '../Components/HomeNavbar';

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
      </div>
</div> 
</div>
</header>

  <section className='section3' style={{backgroundColor: "rgb(28, 42, 51)", height: "100vh"}}>

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
              </ul>
                      <Link to='/get-started' style={{ textDecoration: 'none', color: 'white' }}>
                      <button class="btn btn-sm text-white" id='section4-btn'>
                      Learn More
                   </button>
                   </Link>
                </div>
             </div>   
        </div>
        </section>
          
          <footer style={{backgroundColor: "rgb(28, 42, 51)", height: "450px"}}> 
             <div className="container">
                <h1 className='section5-h1'>What makes CIP unique?</h1>
                <div className="row" id='section5'>
                   <div className="col-lg-4">
                      <h3>Flexibility</h3>
                      <p>CIP empowers users to create tailored inheritance solutions,
                          multi-signature wallets, and legally sound agreements that evolve
                          alongside their needs. This modularity offers users the freedom 
                          to adapt and secure their assets across decentralized networks
                          with ease.
                        </p>
                   </div>

                   <div className="col-lg-4">
                      <h3>Bulletproof Security</h3>
                      <p>CIP introduces a new standard for safeguarding wealth in
                         decentralized ecosystems. Its smart contracts are designed
                        to provide unmatched security for digital legacies, ensuring 
                        users' assets and agreements are safe and future-proof.
                    </p>
                   </div>

                   <div className="col-lg-4">
                      <h3>Comprehensiveness</h3>
                      <p>Whether it’s traditional or digital, your assets are secured
                          across every ecosystem. With our crypto inheritance 
                         protocol, you can rest assured that everything you’ve 
                         worked for is fully protected—no matter the asset, no
                         matter the platform.
                        </p>
                   </div>

                </div>
             </div>
          </footer>
          <div className="footer-name">
                <p> &#169; 2025 Crypto Inheritance Protocol. All Rights Reserved.</p>
             </div>
             </div>        
  )
}


export default Home;
