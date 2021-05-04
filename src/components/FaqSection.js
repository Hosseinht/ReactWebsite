import React from 'react';
import Toggle from "./Toggle";
//Styles
import styled from "styled-components";
import {About} from "../styles";
//Animation
import {AnimateSharedLayout} from "framer-motion";


const FaqSection = () => {
    return (
        <Faq className="faq">
            <h2>Any Question <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, unde.</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, unde.</p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, unde.</p>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, unde.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )

};

//Styles
const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;