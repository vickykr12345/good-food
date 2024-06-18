import React from 'react'

export default function Product() {
    return (
        <div>
            <div className='pt-5 pb-3'>
                <div className='container'>
                <h3 >Popular Food</h3>
                    <p>Find nearby best food. </p>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                                <div className='gd-prd-img'><img src={require('../images/prd-1.png')} /></div>
                                <div className='gd-prd-txt'>
                                    <h4>hamburger</h4>
                                    {/* <h3>$3.86</h3> */}
                                    <select name="" id="" className='bg-transparent'>
                                        {Array.from(Array(6), (e, i) => {
                                            return (
                                                <option value={i + 1} key={i + 1}> {i + 1} </option>
                                            )
                                        })}
                                    </select>&emsp;
                                    <select className='bg-transparent'>
                                        <option value="">Small</option>
                                        <option value="">Regular</option>
                                        <option value="">Large</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                            <div className='gd-prd-img'><img src={require('../images/prd-4.png')} /></div>
                                <div className='gd-prd-txt'>
                                <h4>noodles</h4>
                                {/* <h3>$1.76</h3> */}
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option value={i + 1} key={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>&emsp;
                                <select className='bg-transparent'>
                                    <option value="">Half</option>
                                    <option value="">Full</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                            <div className='gd-prd-img'><img src={require('../images/prd-2.png')} /></div>
                                <div className='gd-prd-txt'>
                                <h4>momos</h4>
                                {/* <h3>$3.86</h3> */}
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option value={i + 1} key={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>&emsp;
                                <select className='bg-transparent'>
                                    <option value="">Half</option>
                                    <option value="">Full</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                            <div className='gd-prd-img'><img src={require('../images/prd-3.png')} /></div>
                                <div className='gd-prd-txt'>
                                <h4>pizza</h4>
                                {/* <h3>$4.97</h3> */}
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option value={i + 1} key={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>&emsp;
                                <select className='bg-transparent'>
                                    <option value="">Small</option>
                                    <option value="">Regular</option>
                                    <option value="">Large</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
