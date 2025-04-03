import React, { useState } from 'react';
import Logo from '../assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './GetStarted';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faCoins, faChevronDown, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import COTI from '../assets/Images/coti.png';
import META from '../assets/Images/mets.png';
import TRUST from '../assets/Images/trust.png';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';


const DashboardWallet = () => {
  const navigate = useNavigate();
   const [selectedWallets, setSelectedWallets] = useState([]);
    const [otherWallet, setOtherWallet] = useState('');
    const [showOtherWalletDropdown, setShowOtherWalletDropdown] = useState(false);
  
    // Handle the selection of a wallet
    const handleCheckboxChange = (wallet) => {
      setSelectedWallets((prev) => {
        if (prev.includes(wallet)) {
          return prev.filter((item) => item !== wallet);
        } else {
          return [...prev, wallet];
        }
      });
    };
  
    // Handle selection of "Other Wallet" option
    const handleOtherWalletSelect = (event) => {
      setOtherWallet(event.target.value);
    };
  
    // Handle the submission of the selected wallet(s)
    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedWallets.length === 0 && !otherWallet) {
        alert('Please select a wallet');
        return;
      }
      // Send selected wallets to the backend
      const selectedData = {
        selectedWallets,
        otherWallet,
      };
      
      console.log('Selected Wallet Data:', selectedData);
      // You can replace this with your backend API call
  
      navigate('/select-asset');
    };
  

  return (
    <div className="" style={{backgroundColor: "black"}}> 
    <div className="" style={{backgroundColor: "black"}}> 
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
                    <div className="progress_container1 ">
                    <div className="progress " ></div>
                    <div className="circle5">1</div>
                    <div className="circle6">2</div>
                    <div className="circle6">3</div>
                    <div className="circle6">4</div>
    </div>
    <div className="wallet-form">
    <form onSubmit={handleSubmit} className='signup-wallet-form' style={{cursor: "pointer"}}> 
        <div className="connect-text">
            <h3>Let’s Connect Your Wallet,</h3>
            <p>Select your preferred wallet.</p>
        </div>
   
    <div className="usl6 mb-3" id='asset1' style={{cursor: "pointer"}}
    disabled={!selectedWallets.includes('COTI')}>
     <img src={COTI} alt="img" style={{width: "30px", height: "30px"}}/>
     <p>COTI</p>
     <label>
          <input
            id='connect-wallet'
            style={{ cursor: "pointer", transform: "translateX(1180%)"}}
            type="checkbox"
            checked={selectedWallets.includes('COTI')}
            onChange={() => handleCheckboxChange('COTI')}
          />
        </label>
     </div>

   <div className="usl6 mb-3" id='asset1' style={{cursor: "pointer"}}
   disabled={!selectedWallets.includes('Meta Mask')}>
    <img src={META} alt="img" style={{width: "30px", height: "30px"}}/>
    <p>Meta Mask</p>
    <label>
          <input
             id='connect-wallet'
             style={{ cursor: "pointer", transform: "translateX(890%)"}}
            type="checkbox"
            checked={selectedWallets.includes('Meta Mask')}
            onChange={() => handleCheckboxChange('Meta Mask')}
          />
        </label>
    </div>

   <div className="usl4  mb-3" id='asset1' style={{cursor: "pointer"}}
   disabled={!selectedWallets.includes('Trust Wallet')}>
           <img src={TRUST} alt="img" style={{width: "30px", height: "30px"}}/>
           <p>Trust wallet</p>
           <label>
          <input
             id='connect-wallet'
            style={{ cursor: "pointer", transform: "translateX(870%)"}}
            type="checkbox"
            checked={selectedWallets.includes('Trust Wallet')}
            onChange={() => handleCheckboxChange('Trust Wallet')}
          />
        </label>
          
    </div>

    <div>
        <label>
          <div className="usl4 form-control"  id='asset4'
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: "63px", padding: "17px", width: "350px"}}
            onClick={() => setShowOtherWalletDropdown(!showOtherWalletDropdown)}
          >
            <span style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500", fontSize: "18px", color: "white"}}>Other Wallets</span>
            <FaChevronRight style={{ position: "relative", left: "10.5rem", cursor: "pointer", marginLeft: '8px', transition: 'transform 0.3s', color: "white"}} />
          </div>
        </label>

        {showOtherWalletDropdown && (
          <div style={{position: "relative", cursor: "pointer", bottom: "18px"}}>
            <select onChange={handleOtherWalletSelect} value={otherWallet} style={{ cursor: "pointer", height: "40px", width: "350px", fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>
              <option value="" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Select Other Wallet</option>
              <option value="Wallet1" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Wallet 1</option>
              <option value="Wallet2" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Wallet 2</option>
              <option value="Wallet3" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Wallet 3</option>
              {/* Add other wallets here */}
           </select>
          </div>
         )}
      
      </div>
  

  <button onClick={handleSubmit} type="submit" class="btn btn mt-4" id='asset-cta'>
    <span className='next-wallet'>Next</span>
  </button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default DashboardWallet;