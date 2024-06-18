import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img from '../images/login-banner.png'

export default function Signup() {
  return (
    <div>
      <div className='gd-login' style={{backgroundImage: `url(${img})`}}><br /><br />
        <div className='container mt-5'>
          <div className='row justify-content-end text-center'>
            <div className='col-lg-5 col-sm-10 col-11 col-md-9'>
              <div className='gd-login-1'>
                <h3 className='font-weight-bold'>Welcome to <strong className='text-warning'>Good Food</strong>  App</h3>
                <p>Sign up to get started</p><br />

                <form action="/find" method="POST" >
                <div class="input-group mb-3">
                    <input type="text" name='full-name' class="form-control" id="basic-url" placeholder='Enter your Name' required />
                  </div>
                  <div class="input-group mb-3">
                    <input type="email" name='user-email' class="form-control" id="basic-url" placeholder='Enter your Email' required />
                  </div>
                  <div class="input-group mb-3">
                    <input type="number" name='user-phone' class="form-control" id="basic-url" placeholder='Enter your Phone Number' required />
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" name='user-password' class="form-control" id="basic-url" placeholder='Enter your Passcode' required />
                  </div>
                  <div class="input-group mb-3" style={{fontSize:'14px',color:'#c7bfbf'}}>
                    <input type="checkbox" id="basic-url" placeholder='Enter your Passcode' required />&emsp;I agree to the &nbsp;<Link to='#'className='text-white text-decoration-none'>Terms & Conditions</Link>&nbsp;and &nbsp; <Link to='#'className='text-white text-decoration-none'>Privacy Policy</Link>.
                  </div>

                  <Link to="/login" className='text-decoration-none gd-login-link'>Already have an account? <b>Login Now</b> </Link><br /><br />
                  <button type="submit" className='bg-warning gd-login-btn'>Sign up</button>
                </form>
              </div>
<br />
              <p>Copyright &copy; 2024 <Link to="/" className='text-decoration-none'><strong> Good Food </strong></Link>. All rights reserved</p>
            </div>
          </div>
        </div><br /><br />
      </div>
    </div>
  )
}
