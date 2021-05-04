import React from "react";
import home1 from '../img/home1.png'
//Style
import {About, Description, Hide, Image} from "../styles";
//FramerMotion
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnim} from "../animation";

import Wave from "./wave";

const AboutSection = () => {
    //FramerMotion Animations

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>the <span>world</span> a better place</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>to live.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact me for anything.I am professional in everything, you will see </motion.p>
                <motion.button variants={fade}>Contact me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="manager's photo"/>
                {/*initial='hidden' animate="show"*/}
            </Image>
            <Wave/>
        </About>
    );
};

export default AboutSection;