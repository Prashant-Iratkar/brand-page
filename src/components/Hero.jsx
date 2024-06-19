import React from "react";
import './Hero.css'

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-content">
                <h1>COMFORT YOUR FEET WITH ADDIDAS SHOSE</h1>
                <p>Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="shop">
                    <p>Also Availabel On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.jpg" alt="" />
                        <img src="/images/Amazon_icon.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/Adidas.jpg" alt="" />
            </div>
        </div>
    );
};

export default Hero;
