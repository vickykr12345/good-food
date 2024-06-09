import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img from '../images/login-banner.png'

export default function Login() {
  return (
    <div>
      <div className='gd-login' style={{backgroundImage: `url(${img})`}}><br /><br />
        <div className='container mt-5'>
          <div className='row justify-content-end text-center'>
            <div className='col-lg-5 col-sm-10 col-11 col-md-9'>
              <div className='gd-login-1'>
                <h3 className='font-weight-bold'>Welcome to <strong className='text-warning'>Good Food</strong>  App</h3>
                <p>Please login to continue</p><br />

                <form method='POST' >
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" id="basic-url" placeholder='Enter Email' required />
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" class="form-control" id="basic-url" placeholder='Enter Passcode' required />
                  </div>

                  <Link to="/signup" className='text-decoration-none gd-login-link'>Don't have an account? <b>Request Now</b> </Link><br /><br />
                  <button type="submit" className='bg-warning gd-login-btn'>Sign in</button>
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
