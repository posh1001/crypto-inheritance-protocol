import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faCoins, faChevronDown, faBell, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Beneficiaries = () => {
   const [wallet1, setWallet1] = useState('');
    const [wallet2, setWallet2] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Check if both wallet addresses are provided
      if (!wallet1 || !wallet2) {
        setError('Both wallet addresses are required!');
        return;
      }
  
      // Clear error message if inputs are valid
      setError('');
      
      // Create the data object to send to the backend
      const data = { wallet1, wallet2 };
      
      // Example: Sending data to backend (You can replace this with your actual API endpoint)
    //   try {
    //     const response = await fetch('https://your-backend-api.com/submit-wallets', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(data),
    //     });
  
    //     const result = await response.json();
    //     console.log('Response from backend:', result);
        
    //     // You can handle response success/failure here
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    console.log(data);
        navigate('/trigger-condition')
     };


  return (
    <div className="" style={{backgroundColor: "black", height: "100vh", overflow: "hidden"}}>  
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
                        <div className="progress_container4" style={{position: "relative", right: "45px"}}>
                        <div className="progress " ></div>
                        <div className="circle5">1</div>
                        <div className="circle5">2</div>
                        <div className="circle5">3</div>
                        <div className="circle6">4</div>
                        <div className="circle6">5</div>
        </div>
        <div className="beneficiary-form">
        <form  onSubmit={handleSubmit} className='add-beneficiary'> 
            <div className="asset-text">
                <h3>Let’s Add Beneficiaries</h3>
                <p className='preferred-asset'>Add one or more  beneficiaries.</p>
            </div>
            <br />
      <div className="asset">
        <label htmlFor="beneficiary Form">Beneficiary 1</label>
        <input 
        className="form-control text-white" 
        id="wallet1" aria-describedby="emailHelp"
         placeholder='Input Wallet Address'
         type="text" 
         value={wallet1} 
         onChange={(e) => setWallet1(e.target.value)} 
         required
         />
      </div>

      <div className="asset mt-3">
        <label htmlFor="beneficiary Form">Beneficiary 2</label>
        <input 
        className="form-control text-white"
         id="wallet2" aria-describedby="emailHelp"
          placeholder='Input Wallet Address'
          type="text" 
          value={wallet2} 
          onChange={(e) => setWallet2(e.target.value)} 
          required
          />
      </div>

      <div className="add-more d-flex py-4">
         <FontAwesomeIcon icon={faCirclePlus} className='circle-plus py-1'/>
         <p className='' style={{textDecoration: "underline"}}>Add Beneficiary</p>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" class="btn btn mt-5" id='asset-btn'> <span>Next</span></button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Beneficiaries;
