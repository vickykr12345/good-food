import React from 'react'
import { useState } from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img from '../images/login-banner.png'

export default function Signup() {
  const [credential, setCredential] = useState({
    userName: "",
    userEmail: "",
    userPasscode: "",
    userLocation: "",
    userPhone: ""
  });

  const formData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/sendata/adduser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        alert("Signup successful");
        // Optionally, redirect to another page upon successful signup
        // history.push('/dashboard');  // Assuming you have access to history object
      } else {
        alert("Failed to sign up. Please check your credentials.");
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert("Failed to sign up. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <div className='gd-login' style={{backgroundImage: `url(${img})`}}>
        <div className='container mt-5'>
          <div className='row justify-content-end text-center'>
            <div className='col-lg-5 col-sm-10 col-11 col-md-9'>
              <div className='gd-login-1'>
                <h3 className='font-weight-bold'>Welcome to <strong className='text-warning'>Good Food</strong>  App</h3>
                <p>Sign up to get started</p><br />

                <form onSubmit={formData}>
                  <div className="input-group mb-3">
                    <input type="text" name='userName' className="form-control" placeholder='Enter your Name..' value={credential.userName} onChange={onChange} />
                  </div>

                  <div className="input-group mb-3">
                    <input type="email" name='userEmail' className="form-control" placeholder='Enter your Email..' value={credential.userEmail} onChange={onChange} />
                  </div>

                  <div className="input-group mb-3">
                    <input type="number" name='userPhone' className="form-control" placeholder='Enter your Phone Number..' value={credential.userPhone} onChange={onChange} />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" name='userLocation' className="form-control" placeholder='Type your location manually..' value={credential.userLocation} onChange={onChange} />
                  </div>

                  <div className="input-group mb-3">
                    <input type="password" name='userPasscode' className="form-control" placeholder='Enter your Passcode..' value={credential.userPasscode} onChange={onChange} />
                  </div>

                  <div className="input-group mb-3" style={{ fontSize: '14px', color: '#c7bfbf' }}>
                    <input type="checkbox" id="userTerm" placeholder='Enter your Passcode' required />&emsp;I agree to the &nbsp;<Link to='#' className='text-white text-decoration-none'>Terms & Conditions</Link>&nbsp;and &nbsp; <Link to='#' className='text-white text-decoration-none'>Privacy Policy</Link>.
                  </div>

                  <Link to="/login" className='text-decoration-none gd-login-link'>Already have an account? <b>Login Now</b> </Link><br /><br />

                  <button type="submit" name='submit' className='bg-warning gd-login-btn'>Sign up</button>
                </form>
              </div>

              <br />
              <p>Copyright &copy; 2024 <Link to="/" className='text-decoration-none'><strong> Good Food </strong></Link>. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function formData(){
//   if(document.formUserData.userName.value === ""){
//     alert("Please Provide your name");
//     document.formUserData.userName.focus();
//     return false;
//   }
//   if(document.formUserData.userEmail.value === ""){
//     var emailId = document.formUserData.userEmail.value;
//     var atpos = emailId.indexOf("@");
//     var dotpos = emailId.lastIndexOf(".");
//     if(atpos < 1 || (dotpos - atpos < 2) ){
//       alert("Please Provide your email");
//       document.formUserData.userEmail.focus();
//       return false;
//     }
    
//   }
//   if(document.formUserData.userPhone.value === ""){
//     alert("Please Provide your Phone");
//     document.formUserData.userPhone.focus();
//     return false;
//   }
//   if(document.formUserData.userPasscode.value === ""){
//     alert("Please Provide your Passcode");
//     document.formUserData.userPasscode.focus();
//     return false;
//   }
//   if(document.formUserData.userPasscode1.value === document.formUserData.userPasscode.value){
//     alert("The Password did not match with upper password");
//     document.formUserData.userPasscode1.focus();
//     return false;
//   }
// }


