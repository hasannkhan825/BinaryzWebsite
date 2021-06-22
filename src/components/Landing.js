import React from 'react';
import Style from './Landing.css';
import Image from './whitebinaryz.png';

const Landing = () => {


    return(
        <div className='section1'>
            <div className="logo-and-tag">
            <img src={Image}/>
            <p>All it takes is all you've got!</p>
            </div>
        </div>
    )


}


export default Landing;