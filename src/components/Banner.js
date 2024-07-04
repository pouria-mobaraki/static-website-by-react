import React from "react";
import './css/Banner.css'

const Banner = () =>{
    return(
        <div className="banner">
            <div className="banner-info">
                <h1>WELCOME TO <br/> POURIA TUTORIALS</h1>
                {/* <p>Make anything possible</p> */}
                <a href="#services">Explore</a>
                
            </div>
        </div>
    )
}

export default Banner ;