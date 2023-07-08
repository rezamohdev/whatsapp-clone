import React from "react";
import imgSrc from './webwo.webp';
import './HomePage.css';
import { Lock } from "@mui/icons-material";
function HomePage() {
    return (
        <div className="homepage">
            <img src={imgSrc} alt="image s" className="centeredImage" />
            <h2 className="homepage__title">WhatsApp Web</h2>
            <span className="homepage__subtitle">
                Send and receive messages without keeping your phone online.
                <br />Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
            </span>
            <div className="enc">
                <Lock className="lock-icon" />
                End -to-end encrypted
            </div>
        </div>
    )
}
export default HomePage;