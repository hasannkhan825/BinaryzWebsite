import React from 'react';

import Style from './Landing.css';
import Image from './images/whitebinaryz.png';

import Carousel from 'react-bootstrap/Carousel';
import Drone from './images/DroneConst2.png';
import WorldMap from './images/MapMin.jpg';
import Cyber from './images/cybersec.png';
import Cybersecurity from './Cybersecurity';
import IOT from './IOT';
import Robotics from './Robotics';

const Landing = () => {


    return(
        <div className='section1'>
            <div className="landing-content">
                <div className="carousel-slideshow">
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="drone"
                        src={Drone}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="map"
                        src={WorldMap}
                        alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="cybersec"
                        src={Cyber}
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    {/* <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    </Carousel>
                </div>

                <div className="logo-and-tag">
                    <img src={Image}/>
                    <p>All it takes is all you've got!</p>
                </div>

                

            </div>


            
         

        </div>
    )


}


export default Landing;