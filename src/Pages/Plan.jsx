import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEnvelope,
faHouse, 
faCoins, 
faChevronDown,
faBell,
faCirclePlus,
faChevronRight,
faCalendarDays, 
} from '@fortawesome/free-solid-svg-icons';

const Plans = () => {
  // State to hold the data fetched from the backend
  const [cryptoPlan, setCryptoPlan] = useState({
    beneficiaries: 0,
    triggerCondition: ''
  });
  
  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the backend when the component mounts
    axios.get('/api/crypto-plan') // Adjust the URL as per your backend API endpoint
      .then(response => {
        // Assuming the response has data in this format: { beneficiaries: <number>, triggerCondition: <string> }
        setCryptoPlan(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        setError('Failed to load the data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="" style={{backgroundColor: "black", height: "100vh"}}> 
          <div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
            <div className="dashboard-menu">
            <div className="brand-logo" style={{cursor: "pointer"}}>
                <Link to='/'> <img src={Logo} alt="logo" /></Link>
            </div>
                <div className="dashboard">
                <button class="btn btn" type="button" id="" style={{cursor: "pointer"}}>
                  <FontAwesomeIcon icon={faHouse} className='house'/>
                <span className='dashboard-text' style={{color: "rgba(255, 255, 255, 1)", }}>
                Dashboard</span>
               </button>

                <div className="plans d-flex" style={{cursor: "pointer"}}>
                <FontAwesomeIcon icon={faCoins} className='coins'/>
                <p>Plans</p>
                </div>
                </div>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="dashboard-header">
                <p className='dashboard-title'>Dashboard</p>
             <div className="Profile" style={{cursor: "pointer"}}>
                      <FontAwesomeIcon icon={faBell} className='profile-list'/>
                      <p className="profile-name"><span className='greeting p-2'>Hello,</span>Poche</p>
                      <span className="profile-picture"></span>
                      <FontAwesomeIcon icon={faChevronDown} className='profile-list'/>
            </div>
        </div>
        <h3 className='plans-header'>Your Plans</h3>
       <div className="plans-overview"> 
      <div>
        <h3>BTC</h3>
        <span className='beneficiary-num'>{cryptoPlan.beneficiaries} Beneficiaries.</span> 
      </div>
      <div className='show-condition text-white' >
         {cryptoPlan.triggerCondition}
      </div>
      <span className='d-flex justify-content-center' id='view-more-plan'>
      Create New Plan
      <FontAwesomeIcon icon={faChevronRight} className='plan-arrow'/>
   </span>
      </div>
      <button className='d-flex justify-content-center' id='new-plan'>
             <FontAwesomeIcon icon={faCirclePlus} className='circle-plus py-1'/>
            Create New Plan
        </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Plans;
