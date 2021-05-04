import React, {useState} from "react";
import {motion} from "framer-motion";

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false)
  return (
      <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
          <motion.h4 layout>{title}</motion.h4>
          {toggle ? children : ''}
          <div className="faq-line"> </div>
      </motion.div>
  )
};
// {toggle ? children : ''}: if toggle is true render out children if not dont render anything

export default Toggle;