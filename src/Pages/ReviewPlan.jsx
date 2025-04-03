import React, { useState, useEffect } from 'react';
import Logo from '../assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,
faHouse,  
faCoins, 
faChevronDown,
faBell,
faCalendarDays, 
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import COTI from '../assets/images/coti.png';
// import BTC from '../assets/images/btc.png';

// Helper function to simulate an API call
const fetchUserData = async () => {
  // Replace with your actual API endpoint to fetch data
  // const response = await fetch('/api/getUserData');
  // const data = await response.json();
  // return data;
};

const ReviewPlan = () => {
  const navigate = useNavigate();
  const [wallets, setWallets] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [triggerCondition, setTriggerCondition] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUserData();
        setWallets(data.wallets);
        setBeneficiaries(data.beneficiaries);
        setTriggerCondition(data.triggerCondition);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleConfirm = () => {
    // Handle confirmation of the plan
    alert('Plan Confirmed!');
    navigate('/plans')
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="" style={{backgroundColor: "black", height: "100vh"}}> 
    <div className="container-fluid">
       <div className="row">
       <div className="col-lg-4">
 <div className="dashboard-menu">
 <div className="brand-logo">
     <a href={Home}>
     <img src={Logo} alt="logo" />
     </a>
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
         <div className="progress_container3 ">
         <div className="progress "></div>
         <div className="circle5">1</div>
         <div className="circle5">2</div>
         <div className="circle5">3</div>
        <div className="circle5">4</div>                       
        <div className="circle5">5</div>
        </div>
      {/* Display crypto wallets */}
      <div className="review-form">   
        <div className="review-plan">
           <h3>Let’s Review Your Plan</h3>
          <p>Confirm your details before creation.</p>
         </div>
      <div className="review-details">
        <div className="details">
          <p>Wallet:</p>
        {wallets.map((wallet, index) => (
          <div key={index} className="wallet">
            <img src={wallet.image} alt={wallet.name} style={{ width: '50px', height: '50px' }}/>
            <span>{wallet.name}</span>
          </div>
        ))}
        </div>
      </div>

      {/* Display beneficiaries */}
      <div className='beneficiary text-light'>
      <p>Your Beneficiaries:</p>
        {beneficiaries.map((beneficiary, index) => (
          <div key={index} className="beneficiary">
            <span className='wallet-address'>{beneficiary.walletAddress}</span>
          </div>
        ))}
      </div>

      {/* Display trigger condition */}
      <div className='conditions'>
        <p className='trigger-text text-white'>Trigger Condition:</p>
        <span>{triggerCondition}</span>
      </div>

      {/* Confirm button */}
      <button onClick={handleConfirm} id='beneficiary-btn'>Confirm Plan</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ReviewPlan;

