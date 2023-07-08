import React from "react";
import imgSrc from './webwo.webp';
import './HomePage.css';
function HomePage() {
    return (
        <div className="homepage">
            <img src={imgSrc} alt="image s" className="centeredImage" />
        </div>
    )
}
export default HomePage;