import React from 'react'

export default function Product() {
  return (
    <div>
      <div className='pt-3 pb-3'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                                <h4>hamburger</h4>
                                <h3>$3.86</h3>
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
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                                <h4>fries</h4>
                                <h3>$1.76</h3>
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
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                                <h4>momos</h4>
                                <h3>$3.86</h3>
                                <select name="" id="" className='bg-transparent'>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option value={i + 1} key={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>&emsp;
                                <select className='bg-transparent'>
                                    <option value="">Veg</option>
                                    <option value="">Non-veg</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center col-md-6 col-12 p-3'>
                            <div className='gd-prd-1'>
                                <h4>pizza</h4>
                                <h3>$4.97</h3>
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
  )
}
