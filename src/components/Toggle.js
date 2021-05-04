import React, {useState} from "react";

const Toggle = ({children}) => {
    const [toggle, setToggle] = useState(true)
  return (
      <div onClick={() => setToggle(!toggle)}>
          {toggle ? children : ''}
      </div>
  )
};
// {toggle ? children : ''}: if toggle is true render out children if not dont render anything

export default Toggle;