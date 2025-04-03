import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faCoins, faChevronDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';

const SelectAsset = () => {
  const navigate = useNavigate();
   const [selectedAsset, setSelectedAsset] = useState("");
    const [error, setError] = useState(""); // To store the validation error
  
    // Sample assets list (could be fetched from backend)
    const assets = [
      { id: 1, name: "Asset 1" },
      { id: 2, name: "Asset 2" },
      { id: 3, name: "Asset 3" },
      { id: 4, name: "Asset 4" },
    ];
  
    // Handle dropdown change event
    const handleSelectChange = (event) => {
      setSelectedAsset(event.target.value);
      setError(""); 
    };
  
    // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Validate if an asset has been selected
      if (!selectedAsset) {
        setError("Please select an asset.");
        return; // Don't proceed if no asset is selected
      }
       navigate('/beneficiaries')
    }
  
      // Make API call to the backend
    //   try {
    //     const response = await fetch("/api/submitAsset", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ asset: selectedAsset }),
    //     });
  
    //     if (response.ok) {
    //       alert("Asset submitted successfully!");
    //       setSelectedAsset(""); // Clear the selection
    //     } else {
    //       alert("Error submitting asset.");
    //     }
    //   } catch (error) {
    //     console.error("Error submitting asset:", error);
    //   }
    // };
  
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
                    <div className="progress_container2 ">
                    <div className="progress " ></div>
                    <div className="circle5">1</div>
                    <div className="circle5">2</div>
                    <div className="circle6">3</div>
                    <div className="circle6">4</div>
                    <div className="circle6">5</div>
    </div>
    <div className="asset-form">
    <form onSubmit={handleSubmit} className='signup-asset-form'> 
        <div className="asset-text">
            <h3>Select Your Asset,</h3>
            <p className='preferred-asset'>Select Your Preferred Asset</p>
        </div>
        <br />
  <div className="asset">
    <label htmlFor="Asset Form">Select Preferred Asset</label>
    <select className='asset-option text-secondary'
     style={{cursor: "pointer"}}
            id="asset"
            value={selectedAsset}
            onChange={handleSelectChange}
            required
          >
            <option value="">
              <span>Select Asset</span>
            </option>
            {assets.map((asset) => (
              <option style={{color: "rgb(250, 245, 245)", cursor: "pointer"}} key={asset.id} value={asset.id}>
                {asset.name}
              </option>
            ))}
        </select>
  </div>
  <button type="submit" class="btn btn mt-4" id='asset-btn'> <span>Next</span></button>
  {error && <p style={{ color: "red" }}>{error}</p>} 
</form>
</div>
</div>
</div>
</div>
</div>
  )
}

export default SelectAsset;