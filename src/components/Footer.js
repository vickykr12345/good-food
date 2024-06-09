import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <div className='gd-footer text-light container-fluid bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='gd-footer-1'>
                                <h4 className='text-uppercase font-weight-bold'>info</h4>
                                <ul>
                                    <li>cart</li>
                                    <li>about</li>
                                    <li>contact</li>
                                    <li>my order</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className='col-lg-3'>
                            <div className='gd-footer-1'>
                                <h4 className='text-uppercase font-weight-bold'>resources</h4>
                                <ul>
                                    <li>blog</li>
                                    <li>terms</li>
                                    <li>privacy</li>
                                    <li>cancellation</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='gd-footer-1'>
                                <h6>Subscribe to our email news letter</h6>
                                <input type="email" name="" id="" placeholder='Enter Your Email' /> <button type="submit" className='gd-butn'>subscribe </button>
                                <br /><br />
                                <h5 className='pt-2'>Follow Us</h5>     
                                <i class="bi bi-facebook"></i>&emsp;<i class="bi bi-whatsapp"></i>&emsp;<i class="bi bi-twitter"></i>&emsp;<i class="bi bi-instagram"></i> <br />      
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='text-center text-light'>
                        <p>Copyright &copy; 2024 <Link to="/" className='text-decoration-none'><strong> Good Food </strong></Link>. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
