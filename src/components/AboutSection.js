import React from "react";
import home1 from '../img/home1.png'
//Styled
import styled from 'styled-components'

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

//Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`
const Description = styled.div`
  flex: 1;
  padding-right: 1rem;

  h2 {
    font-weight: lighter;
  }
`
const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;
`


export default AboutSection;