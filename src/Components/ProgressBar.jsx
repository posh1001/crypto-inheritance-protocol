import React from 'react';

const ProgressBar = () => {
  return (
    <>
    <div className="signup-progress"> 
        <img src={logo} className='logo px-5 py-4' alt="logo" />
        <div className="progress_container ">
        <div className="progress " ></div>
        <div className="circle1">1</div>
        <div className="circle2">2</div>
        <div className="circle2">2</div>
       </div>
    </div>
    </>
  )
}

export default ProgressBar;


