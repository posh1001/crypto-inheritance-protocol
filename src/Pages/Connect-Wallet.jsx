import React, { useState } from 'react';
import '../index.css';
import Welcome from '../Components/Welcome';
import logo from '../assets/Images/logo.png';
import COTI from '../assets/Images/coti.png';
import META from '../assets/Images/mets.png';
import TRUST from '../assets/Images/trust.png';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';



const ConnectWallet = () => {
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

    navigate('/select-plan');
  };


  return (
    <div className="" style={{backgroundColor: "black", height: "100vh"}}> 
    <div className="container">
       <div className="row p-1 " id='signup-row'> 
        <Welcome/>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="signup-progress"> 
        <img src={logo} className='logo px-5 py-4' alt="logo" />
        <div className="progress_container ">
        <div className="progress " ></div>
        <div className="circle3">1</div>
        <div className="circle4">2</div>
    </div>
      <form action="" className='signup-form' id='connect-wallet' style={{cursor: "pointer"}}>
       <div className="mb-3" style={{lineHeight: "25px", position: "relative", right: "45px"}}>
       <h3 style={{lineHeight: "55px"}}>Connect Wallet</h3>
       <p>Connect a valid wallet to get started</p>
       </div>

      <div className="usl2 col-8 mb-3 d-flex" id='asset1' style={{}}>
      <img src={COTI} alt="img" style={{width: "30px", height: "30px"}}/>
        <label>
          <input
            id='connect-wallet2'
            style={{ cursor: "pointer", transform: "translateX(1790%)"}}
            type="checkbox"
            checked={selectedWallets.includes('COTI')}
            onChange={() => handleCheckboxChange('COTI')}
          />
           <span style={{ position: "relative", bottom: "20px", cursor: "pointer"}}>COTI</span>
        </label>
      </div>

      <div className="usl2 col-8 mb-3" id='asset1'>
      <img src={META} alt="img" style={{width: "30px", height: "30px"}}/>
        <label>
          <input
             id='connect-wallet2'
             style={{ cursor: "pointer", transform: "translateX(1530%)"}}
            type="checkbox"
            checked={selectedWallets.includes('Meta Mask')}
            onChange={() => handleCheckboxChange('Meta Mask')}
          />
          <span style={{ position: "relative", bottom: "20px", cursor: "pointer"}}>Meta Mask</span>
        </label>
      </div>
      <div className="usl2 col-8 mb-3" id='asset1'>
      <img src={TRUST} alt="img" style={{width: "30px", height: "30px"}}/>
        <label>
          <input
             id='connect-wallet2'
            style={{ cursor: "pointer", transform: "translateX(1500%)"}}
            type="checkbox"
            checked={selectedWallets.includes('Trust Wallet')}
            onChange={() => handleCheckboxChange('Trust Wallet')}
          />
          <span style={{ position: "relative", bottom: "20px", cursor: "pointer"}}>Trust Wallet</span>
        </label>
      </div>
      
      <div>
        <label>
          <div className="usl1 col-8 mb-3 d-flex" id='asset1'
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: "63px", padding: "17px", width: "400px"}}
            onClick={() => setShowOtherWalletDropdown(!showOtherWalletDropdown)}
          >
            <span style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500", fontSize: "18px"}}>Other Wallets</span>
            <FaChevronRight style={{ position: "relative", left: "14.5rem", cursor: "pointer", marginLeft: '8px', transition: 'transform 0.3s'}} />
          </div>
        </label>
        {showOtherWalletDropdown && (
          <div style={{position: "relative", cursor: "pointer", bottom: "18px"}}>
            <select onChange={handleOtherWalletSelect} value={otherWallet} style={{ height: "60px", width: "400px", fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>
              <option value="" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Select Other Wallet</option>
              <option value="Wallet1" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Wallet 1</option>
              <option value="Wallet2" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Wallet 2</option>
              <option value="Wallet3" style={{fontFamily: "Space Grotesk, sans-serif", fontWeight: "500"}}>Wallet 3</option>
              {/* Add other wallets here */}
            </select>
          </div>
        )}
      </div>
      <button onClick={handleSubmit} type="submit" className='col-8' id='formbtn'>Submit</button>
      </form>
         
</div>
</div>
</div>
</div>
</div>
  )
}

export default ConnectWallet;


