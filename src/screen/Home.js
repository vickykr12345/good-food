import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import LoginHeader from '../components/LoginHeader'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Carsouel from '../components/Carsouel'




export default function Home() {
    return (
        <div>
            <div><Header /></div>
            <div> <Banner /> </div>

            <div>
                <img src={require('../images/scooter.png')} alt="" className='gd-sccoter' />
            </div>
            {/* second section */}
            <div className='container mt-5'>
                <div className='row'>
                    <h3>Categories</h3>
                    <p>Browse out top categories here to discover different food cuision.</p>
                    <div> <Carsouel /> </div>
                </div>
            </div>



            <div> <Product /> </div>
            <div><Footer /></div>

        </div>
    )
}
