import React from 'react'
import { Link } from 'react-router-dom'
import App from '../App'
import Login from '../screen/Login'
import Signup from '../screen/Signup'


export default function LoginHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="h3 text-warning text-decoration-none" to="/">Good Food</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="bi bi-list text-light"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className='gd-nav-1 d-flex'>
                            <Link to="/login" className='bg-warning text-dark'>Login</Link>&emsp;
                            <Link to='/signup' className='bg-success'>Signup</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
