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
      console.log(result)
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

  // buttons 
  const btns = ["C",9,"/",8,7,6,"*",5,4,3,"+",2,1,0,"-",".","Del","="]

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