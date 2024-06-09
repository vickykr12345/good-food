import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginHeader from '../components/LoginHeader'

export default function Home() {
    return (
        <div>
            <LoginHeader />
            <div className='pt-3 pb-3'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-2'>
                            <div className='gd-prd-1'>
                                <h4 className=''>hamburger</h4>
                                <h3 className=' text-success'>$3.86</h3>
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (i)=>{
                                        return(
                                            <option value={i+1} key={i+1}> {i+1} </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-2'>
                            <div className='gd-prd-1'>
                                <h4>fries</h4>
                                <h3>$1.76</h3>
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (i)=>{
                                        return(
                                            <option value={i+1} key={i+1}> {i+1} </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-2'>
                            <div className='gd-prd-1'>
                                <h4>hamburger</h4>
                                <h3>$3.86</h3>
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (i)=>{
                                        return(
                                            <option value={i+1} key={i+1}> {i+1} </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-2'>
                            <div className='gd-prd-1'>
                                <h4>pizza</h4>
                                <h3>$4.97</h3>
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (i)=>{
                                        return(
                                            <option value={i+1} key={i+1}> {i+1} </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
