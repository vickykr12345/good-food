import React from 'react'
import { Link } from 'react-router-dom'
import App from '../App'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="h3 text-warning text-decoration-none" to="javascript:void(0)" onClick={App}>Good Food</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        {/* <Link className="nav-Link active text-light gd-nav text-decoration-none" aria-current="page" to="#">My Orders</Link>&emsp; */}
                        <Link className="nav-Link active text-light text-decoration-none gd-nav" aria-current="page" to="#"><i class="bi bi-person-circle"></i> Hi, Vicky Kumar</Link>&emsp;
                        <Link className="nav-Link active text-light text-decoration-none" aria-current="page" to="#"><i class="bi bi-geo-alt-fill text-light"></i> New Town, Kolkata</Link>
                        
                            {/* <Link className="nav-Link text-light" to="#">Cart</Link> */}
                        </div>

                        <div className='gd-nav-1 d-flex'>
                        <Link to='javascript:void(0)' className='bg-warning text-dark'>Cart (0)</Link>&emsp;
                            <Link to='javascript:void(0)' className='bg-warning text-dark'>My Orders</Link>&emsp;
                            <Link to='javascript:void(0)' className='bg-danger'>Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
