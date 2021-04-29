import React from "react";
import manager from '../img/manager.webp'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>the <span>world</span> a better place</h2>
                    </div>
                    <div className="hide">
                        <h2>to live.</h2>
                    </div>
                </div>
                <p>Contact me for anything.I am professional in everything, you will see </p>
                <button>Contact me</button>
            </div>
            <div className="image">
                <img src={manager} alt="manager's photo"/>
            </div>
        </div>
    )
}
export default AboutSection;