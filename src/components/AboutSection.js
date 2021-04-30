import React from "react";
import home1 from '../img/home1.png'
//Styled
import styled from 'styled-components'
import {About, Description, Image, Hide} from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>the <span>world</span> a better place</h2>
                    </Hide>
                    <Hide>
                        <h2>to live.</h2>
                    </Hide>
                </div>
                <p>Contact me for anything.I am professional in everything, you will see </p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={home1} alt="manager's photo"/>
            </Image>
        </About>
    );
};



export default AboutSection;