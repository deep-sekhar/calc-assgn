import React, {useState} from 'react'
import classes from "./Home.module.css"
import Button from './Button'

function Home() {

  // store result 
  const [res, setRes] = useState("")

  // function to compute 
  const findValue = ()=>{
    try{
      // compute 
      let result = Function("return " + res)();
      // console.log(result)
      result = (Math.round(result*100))/100;
      setRes(result.toString()); 
    }
    catch(e){
      // if any issue in computing 
      setRes("ERROR")
    }
}

  const handler = (arg) => {

    // clear inout 
    if(arg === "C"){
      setRes("")
      return;
    } 
    // handle errors and infnity 
    if(res == "ERROR" || res === "Infinity")
    {
      setRes("");
      return;
    }
    // if = pressed 
    if(arg === "=") findValue();
    // delete a character 
    else if(arg === "Del"){
        if(res.length > 0){
          let n = res.length;
          setRes(res.slice(0,n-1))
        }
    }
    // else just concatenate 
    else{
        setRes(res.concat(arg))
    } 
  }

  // to prevent multiple calls when keydown called using a variable so that device not hanged
  const [pressed, setPressed] = useState(0)
  document.addEventListener('keydown', function(event){
    if(pressed == 0){
    if(event.key === "Backspace") handler("Del")
    else if(event.key === "=" || event.key==="Enter") findValue()
    else if(event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3"|| event.key === "4"|| event.key === "5"|| event.key === "6"|| event.key === "7"|| event.key === "8"|| event.key === "9"|| event.key === "+"|| event.key === "-"|| event.key === "*"|| event.key === "/" ||event.key === ".") handler(event.key)
    setPressed(1);
    }
  })
  document.addEventListener('keyup', function(event){
    setPressed(0);
  })
  
  // buttons 
  const btns = ["C","9","/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="]

  return (
    <div className={`${classes.home} ${classes.dismid}`}>
    <div className={classes.inner}>
        <div className={`${classes.result} ${classes.dismid}`}>
            <div className={`${classes.resbox}`}>
            {res}
            </div>
        </div>
        <div className={classes.btns}>
            {btns.map((ele,index)=>{
                return <Button key={index} value={ele} handler={handler}></Button>
            })}
        </div>
    </div>
    </div>
  )
}

export default Home