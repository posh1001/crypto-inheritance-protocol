import React, { useState } from 'react';
import Logo from '../assets/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faCoins, faChevronDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TriggerCondition = () => {
  const navigate = useNavigate();
   const [selectedTrigger, setSelectedTrigger] = useState("");
    const [error, setError] = useState(""); // To store the validation error
  
    // Sample assets list (could be fetched from backend)
    const triggers = [
      { id: 1, name: "Trigger 1" },
      { id: 2, name: "Trigger 2" },
      { id: 3, name: "Trigger 3" },
      { id: 4, name: "Trigger 4" },
    ];
  
    // Handle dropdown change event
    const handleSelectChange = (event) => {
      setSelectedTrigger(event.target.value);
      setError(""); 
    };
  
    // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Validate if an asset has been selected
      if (!selectedTrigger) {
        setError("Please select a trigger condition.");
        return; // Don't proceed if no asset is selected
      }
       navigate('/trigger-condition2')
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
    //       setSelectedTrigger(""); // Clear the selection
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
               <Link to='/'> 
                  <img src={Logo} alt="logo" />
               </Link>
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
                    <div className="circle5">3</div>
                    <div className="circle6">4</div>
                    <div className="circle6">5</div>
    </div>
    <div className="asset-form">
    <form onSubmit={handleSubmit} className='signup-asset-form'> 
        <div className="asset-text">
            <h3>Trigger Conditions,</h3>
            <p className='preferred-asset'>Create conditions for your assets to be accessible.</p>
        </div>
        <br />
  <div className="asset">
    <label htmlFor="Trigger Form">Select Your Terms</label>
    <select className='asset-option text-secondary'
     style={{cursor: "pointer"}}
            id="trigger"
            value={selectedTrigger}
            onChange={handleSelectChange}
            required
          >
            <option value="">
              <span>Select</span>
            </option>
            {triggers.map((trigger) => (
              <option style={{color: "rgb(250, 245, 245)", cursor: "pointer"}} key={trigger.id} value={trigger.id}>
                {trigger.name}
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

export default TriggerCondition;