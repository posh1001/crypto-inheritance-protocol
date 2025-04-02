import React, {useState} from 'react';
import SelectionNavbar from '../Components/SelectionNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import SelectPlanButton2 from '../Components/SelectPlanButton2';
import SelectPlanButton from '../Components/SelectPlanButton';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/Buttons';

const SelecePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedPlan) {
      alert('Please select a plan.');
      return;
    }

    // Sending the selected plan to the backend
    // try {
    //   const response = await fetch('https://your-backend-url.com/submit-plan', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       plan: selectedPlan,
    //       feature: 'Individual users', // The feature that comes with the plan
    //     }),
    //   });

    //   if (response.ok) {
    //     alert('Your plan has been submitted successfully.');
    //   } else {
    //     alert('There was an error submitting your plan.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('Failed to submit your plan.');
    // }

    navigate('/dashboard')
  };
  

  return (
    <div className="" style={{backgroundColor: "black", height: "100vh", overflow: "hidden" }}> 
    <div className="container-fluid" style={{cursor: "pointer", height: "100vh"}}>
       <SelectionNavbar/>
      <div className="row px-4">
        <div className="payment-header">
           <h1>Choose the Best Plan For You!</h1>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-xsm-12">
        <div className='price-plan'>
    <div className="price-details"> 
  <div className="plan-type bg-dark">
      <span>Free Plan</span>
  </div>
 <div className="price py-3">
  <p className="p1">$0 <span style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px" }}>one time Payment</span>
  </p>

  <p className="p2 ">$0 
    <span  style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "18px"}} >/m</span> 
    <span className='px-1'  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}>or</span> $0 
    <span  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}>/y</span>
  </p>
 </div>
 <hr className='hr-line' style={{ borderBlockStyle: "dashed ", color: "white", width: "200px" }} />
 <ul className='benefits'
  name="paymentPlan"
  value="Free Plan"
  onSubmit={handleSubmit}
  >
   <li className='d-flex gap-2 py-1' onChange={() => setSelectedPlan('Free Plan')}>
   <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
    Individual Users
   </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Crypto Investors
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Legal Executors
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Institutions
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Create Inheritance Plans
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Multi-Signature Wallet Integration
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Encrypted Document Storage (IPFS)
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    AI Fraud Detection (Future)
    </li>
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    Priority Customer Support
    </li>
   
   <li className='d-flex gap-2 py-1'>
   <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
    API Access for Institutions</li>
 </ul>
 <div className="py-5 px-3">
  <Link to="/dashboard"> <SelectPlanButton/> </Link>
  
 </div>
</div>
</div>
  </div>

        <div className="col-lg-3 col-md-3 col-sm-12">
        <div className='price-plan2'>
        <div className="price-details"> 
      <div className="plan-type">
          <span>Basic Plan</span>
      </div>
     <div className="price py-3">
      <p className="p1">$47 <span style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px" }}>one time Payment</span>
      </p>
    
      <p className="p2 ">$9.99 
        <span  style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "18px"}} >/m</span> 
        <span className='px-1'  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}>or</span> $99
        <span  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}>/y</span>
      </p>
     </div>
     <hr className='hr-line' style={{ borderBlockStyle: "dashed ", color: "white", width: "200px" }} />
     <ul className='benefits'>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Individual Users
       </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Crypto Investors
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Legal Executors
        </li>
       <li className='d-flex gap-2 py-1 text-secondary'>
       <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
        Institutions
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Create Inheritance Plans
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Multi-Signature Wallet Integration
        </li>
       <li className='d-flex gap-2'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Encrypted Document Storage (IPFS)
        </li>
       <li className='d-flex gap-2 py-1 text-secondary'>
       <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
        AI Fraud Detection (Future)
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Priority Customer Support
        </li>
       
       <li className='d-flex gap-2 py-1 text-secondary'>
       <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
        API Access for Institutions</li>
     </ul>
     <div className="py-5 px-4">
     <SelectPlanButton2/>
     </div>
    </div>
    </div>
        </div>
        <div className="col-lg-3 col-md-3">
        <div className='price-plan3'>
            <div className="price-details"> 
          <div className="plan-type">
              <span>Premium Plan</span>
          </div>
         <div className="price py-3">
          <p className="p1">$49 <span style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px" }}>one time Payment</span>
          </p>
        
          <p className="p2 ">$19.99 
            <span  style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "18px"}} >/m</span> 
            <span className='px-1'  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}>or</span> $199
            <span  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}>/y</span>
          </p>
         </div>
         <hr className='hr-line' style={{ borderBlockStyle: "dashed ", color: "white", width: "200px" }} />
         <ul className='benefits'>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Individual Users
           </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Crypto Investors
            </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Legal Executors
            </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Institutions
            </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Create Inheritance Plans
            </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Multi-Signature Wallet Integration
            </li>
           <li className='d-flex gap-2'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Encrypted Document Storage (IPFS)
            </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            AI Fraud Detection (Future)
            </li>
           <li className='d-flex gap-2 py-1'>
           <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
            Priority Customer Support
            </li>
           
           <li className='d-flex gap-2 py-1 text-secondary'>
           <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
            API Access for Institutions</li>
         </ul>
         <div className="py-5 px-4">
         <SelectPlanButton2/>
         </div>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-3">
        <div className='price-plan4'>
        <div className="price-details"> 
      <div className="plan-type">
          <span>Enterprise Plan</span>
      </div>
     <div className="price py-3">
      <p className="p1">Custom <span style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px" }}></span>
      </p>
    
      <p className="p2 ">Custom
        <span  style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "18px"}} ></span> 
        <span className='px-1'  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}></span>
        <span  style={{fontFamily: "Space Grotesk, sans-serif",fontSize: "18px"}}></span>
      </p>
     </div>
     <hr className='hr-line' style={{ borderBlockStyle: "dashed ", color: "white", width: "200px" }} />
     <ul className='benefits'>
       <li className='d-flex gap-2 py-1 text-secondary'>
       <FontAwesomeIcon icon={faXmark} className='benefit-list'/>
        Individual Users
       </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Crypto Investors
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Legal Executors
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Institutions
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Create Inheritance Plans
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Multi-Signature Wallet Integration
        </li>
       <li className='d-flex gap-2'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Encrypted Document Storage (IPFS)
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        AI Fraud Detection (Future)
        </li>
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        Priority Customer Support
        </li>
       
       <li className='d-flex gap-2 py-1'>
       <FontAwesomeIcon icon={faCircleCheck} className='benefit-list1'/>
        API Access for Institutions</li>
     </ul>
     <div className="py-5 px-4">
     <SelectPlanButton2/>
     </div>
    </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SelecePlan;

