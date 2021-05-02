import React from "react";
import home1 from '../img/home1.png'
//Style
import {About, Description, Hide, Image} from "../styles";
//FramerMotion
import {motion} from "framer-motion";

const AboutSection = () => {
    //FramerMotion Animations

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>the <span>world</span> a better place</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>to live.</motion.h2>
                    </Hide>
                </motion.div>
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