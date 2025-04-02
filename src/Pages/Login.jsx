import React from 'react';
import '../index.css';
import Welcome from '../Components/Welcome';
import logo from '../assets/images/logo.png';
import google2 from '../assets/images/google2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';



const Login = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password} = formData;
    if (!email || !password) {
      setError("All fields are required.");

      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Signup successful:', data);
      } else {
        setError(data.message || 'An error occurred');
      }
    }
    
    setError("");

    navigate('/connect-wallet')

    console.log(formData)

    {/* TODO: CONNECT TO BACKEND */}
    
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

   const handleGoogleSignUp = async () => {
      try {
        const result = await auth.signInWithPopup(googleProvider);
        const user = result.user;
        console.log(user);
        alert(`Welcome, ${user.displayName}!`);
        // Handle further actions like storing user data or redirecting
      } catch (error) {
        console.error('Error signing up with Google:', error);
        alert('Error signing up with Google');
      }
    }
 
  return (
    <div className="signup-bg" style={{backgroundColor: "black", height: "100vh"}}> 
   <div className="container">
       <div className="row p-1 " id='signup-row'>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Welcome/>
        </div>
       <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="signup-progress"> 
        <img src={logo} className='logo px-5 py-4' alt="logo" />
        <div className="progress_container ">
        <div className="progress " ></div>
        <div className="circle1">1</div>
        <div className="circle2">2</div>
       </div>
    <form className='signup-form' onSubmit={handleSubmit}>
        <div className="form-text">
            <h3>Login</h3>
            <p>Enter correct credentials</p>
        </div>

  <div className="col-8">
    <label for="signup" class="form-label1 ">Email address</label>
    <input type="email" 
    name='email'
    className="form-control text-light" 
    id="asset" 
    aria-describedby="emailHelp" 
    placeholder='Enter Email Address'
    value={formData.email}
    onChange={handleInputChange}
    required
    />
  </div>

  <div className="col-8">
    <label for="password" class="form-label">Enter New Password</label>
    <span onClick={togglePasswordVisibility}> 
    <FontAwesomeIcon icon={faEye} className='eye'/>
    </span>
    <input
     className="form-control text-light"
     type={showPassword ? 'text' : 'password'}
     name='password'
     id="asset"
      onClick={togglePasswordVisibility}
      placeholder='Enter New Password'
      value={formData.password}
      onChange={handleInputChange}
      required
    />
   </div>
  <button type="submit" 
  class="btn btn mt-3 col-8">
  <span style={{fontSize: "20px"}}>Next</span>
  </button>

  <span className='mb-2 text-white' style={{fontFamily:  "Space Grotesk, sans-serif"}}>Or</span>

  <button onClick={handleGoogleSignUp} type="submit" className="btn1 col-8">
    <span ><img src={google2} alt="" 
    style={{width: "27px", height: "27px",
     marginRight: "6px"}}/></span>
    <span style={{fontSize: "20px"}}>
      Sign in with Google
      </span>
  </button>
   <span className='py-2' style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "18px", fontWeight: "500", color: "white"}}>Don't have an account? 
    <Link to='/signup'> Create an account</Link></span>
</form>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Login;
