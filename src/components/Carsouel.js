import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Carsouel() {
    return (
        <div>

            <OwlCarousel className='owl-theme' loop margin={10} autoplay={true}>
                <div className='p-3'> <div class='item'>
                    <img src={require('../images/p-2.png')} />
                    <h4>1</h4>
                </div></div>
                <div className='p-3'><div class='item'>
                    <img src={require('../images/p-3.png')} />
                    <h4>2</h4>
                </div></div>
                <div className='p-3'><div class='item'>
                    <img src={require('../images/p-6.png')} />
                    <h4>3</h4>
                </div></div>
                <div className='p-3'><div class='item'>
                    <img src={require('../images/p-8.png')} />
                    <h4>4</h4>
                </div></div>
                <div className='p-3'><div class='item'>
                    <img src={require('../images/p-10.png')} />
                    <h4>5</h4>
                </div></div>
                <div className='p-3'><div class='item'>
                    <img src={require('../images/p-15.png')} />
                    <h4>6</h4>
                </div></div>
                <div className='p-3'><div class='item'>
                    <img src={require('../images/p-20.png')} />
                    <h4>7</h4>
                </div></div>


            </OwlCarousel>;

        </div>
    )
}
