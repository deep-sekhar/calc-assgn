import React from 'react'
import classes from "./Button.module.css"

function Button({handler, value}) {
  return (
    // value is button value handler handles what happens if clicked 
    // if = and C take more space along column 
    <div className={value==="=" || value == "C"?`${classes.calcBtns} ${classes.res}`:`${classes.calcBtns}`}
    onClick={()=>{handler(value)}}
    >
        {value}
    </div>
  )
}

export default Button