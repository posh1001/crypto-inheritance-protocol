import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
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

const TriggerCondition2 = () => {
   // State to store the selected term and date
    const [term, setTerm] = useState('');
    const [date, setDate] = useState('');
  
    const navigate = useNavigate();
    // Predefined options for the dropdowns (these can be modified as needed)
    const terms = ['Term 1', 'Term 2', 'Term 3']; // Example terms
    const dates = ['2023-12-01', '2024-01-15', '2024-03-01']; // Example dates
  
    // Function to handle the form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Check if both term and date are selected
      if (!term || !date) {
        alert('Please select both term and date');
        return;
      }
  
      // Create an object with the selected conditions
      const selectedConditions = {
        term,
        date,
      };
  
      // try {
      //   // Send the selected conditions to the backend
      //   const response = await fetch('https://your-backend-url.com/trigger', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(selectedConditions),
      //   });
  
      //   const data = await response.json();
      //   if (response.ok) {
      //     alert('Trigger conditions successfully submitted');
      //     console.log(data); // Optionally log the response from the backend
      //   } else {
      //     alert('Failed to submit trigger conditions');
      //     console.error(data);
      //   }
      // } catch (error) {
      //   alert('An error occurred while submitting the form');
      //   console.error(error);
      // }

      navigate('/review-plan')
    };

  return (
    <div className="container-fluid" style={{backgroundColor: "black", height: "100vh"}}>
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
                    <div className="circle5">3</div>
                    <div className="circle5">4</div>
                    <div className="circle6">5</div>
    </div>
    <div className="trigger-form">
       <div className="asset-text">
       <h3> Trigger Conditions</h3>
       <p className='preferred-asset'>Create conditions for your assets to be accessible.</p>
       </div>
      <form onSubmit={handleSubmit} className='signup-asset-form py-5'>
        <div className="asset">
          <label htmlFor="term">Select Your Term</label>
          <select id="term" value={term} onChange={(e) => setTerm(e.target.value)} className='trigger-option'>
            <option value="">Due Date</option>
            {terms.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="asset py-3">
          <label htmlFor="date">Select Your Terms</label>
          <FontAwesomeIcon icon={faCalendarDays} style={{color: "rgba(255, 255, 255, 1)",
           transform: "translateY(100%)",
           position: "absolute",
           left: "37px",
          }}/>
          <select id="date" value={date} onChange={(e) => setDate(e.target.value)} className='trigger-option'>
            <option value="">Select</option>
            {dates.map((d, index) => (
              <option key={index} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" id='asset-btn'><span>Next</span></button>
      </form>
    </div>
    {/* <div className="trigger-form">
    <form className='signup-asset-form'> 
        <div className="asset-text">
            <h3>Trigger Conditions,</h3>
            <p className='preferred-asset'>Create conditions for your assets to be accessible.</p>
        </div>
        <br />
  <div className="asset">
    <label className='' htmlFor="Asset Form">Select Your Terms</label>
    <FontAwesomeIcon icon={faChevronDown} className='wallet3'/>
    <input type="email" className="form-control text-light" id="trigger" aria-describedby="emailHelp" placeholder='Due Date'/>
  </div>

  <div className="asset">
    <label htmlFor="Asset Form"
    style={{width: "422px", height: "20px"}}
    >Select Your Terms</label>
    <FontAwesomeIcon icon={faChevronDown} className='wallet3'/>
    <input type="calandar" className="form-control text-light" id="trigger2" aria-describedby="emailHelp" placeholder='Select'/>
    <FontAwesomeIcon icon={faCalendarDays} className='calendar'/>
  </div>

  <button type="submit" class="btn btn mt-4" id='asset-btn'> <span>Next</span></button>
</form>
</div> */}
</div>
</div>
</div>
  )
}

export default TriggerCondition2
