import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import LoginHeader from '../components/LoginHeader'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Carsouel from '../components/Carsouel'
// import Aos from '../components/Aos'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    easing: "ease-out-cubic",
    duration: 20000
});


export default function Home() {
    return (
        <div>
        {/* <div><LoginHeader /></div> */}
            <div><Header /></div>
            <div> <Banner /> </div>

            <div> <img src={require('../images/scooter.png')} alt="" className='gd-sccoter' /> </div>

            {/* second section */}

            <div className='container mt-5'>
                <div className='row'>
                    <h3>Categories</h3>
                    <p>Browse out top categories here to discover different food cuision.</p>
                    <div> <Carsouel /> </div>
                </div><br />
            </div>

            {/* third section */}

            <div className='container-fluid gd-home-3'>
                <div className='container'>
                    
                    <h3 data-aos="fade-right    ">Today’s Deal</h3>
                    <p>Take a benefit from our latest offers. </p><br />
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <img src={require('../images/banner2.jpg')} alt="" style={{ "border-radius": "10px", "width": "100%" }} />
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <img src={require('../images/banner4.jpg')} alt="" style={{ "border-radius": "10px", "width": "100%" }} />
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <img src={require('../images/banner3.jpg')} alt="" style={{ "border-radius": "10px", "width": "100%" }} />
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <img src={require('../images/banner5.jpg')} alt="" style={{ "border-radius": "10px", "width": "100%" }} />
                        </div>
                    </div>
                </div>
            </div>


            <div> <Product /> </div>
            <div><Footer /></div>

        </div>
    )
}
