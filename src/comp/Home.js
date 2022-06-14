import React, {useState} from 'react'
import classes from "./Home.module.css"
import Button from './Button'

function Home() {
  // store what is displayed 
  const [dis, setDis] = useState("")
  // store result 
  const [res, setRes] = useState("")

  // function to compute 
  const findValue = ()=>{
    try{
      // compute 
      let result = Function("return " + res)();
      console.log(result)
      setRes(result.toString()); 
      setDis(result.toString()); 
    }
    catch(e){
      // if any issue in computing 
      console.log(e);
      setDis("ERROR")
    }
}

  const handler = (arg) => {

    // clear inout 
    if(arg === "C"){
      setRes("")
      setDis("")
      return;
    } 
    // handle errors and infnity 
    console.log(dis == "Infinity", "==", typeof(dis))
    if(dis == "ERROR" || dis === "Infinity")
    {
      setDis("");
      setRes("");
      return;
    }
    // Put limit on number entered 
    if(res.length > 10) return;
    // if = pressed 
    if(arg === "=") findValue();
    // multiply display issue 
    else if(arg === "x"){
        setDis(dis.concat(arg))
        setRes(res.concat("*"))
    }
    // delete a character 
    else if(arg === "Del"){
        if(res.length > 0){
          let n = res.length;
          setDis(dis.slice(0,n-1))
          setRes(res.slice(0,n-1))
        }
    }
    // else just concatenate 
    else{
        setDis(dis.concat(arg))
        setRes(res.concat(arg))
    } 
  }

  // buttons 
  const btns = ["C",9,"/",8,7,6,"x",5,4,3,"+",2,1,0,"-",".","Del","="]

  return (
    <div className={`${classes.home} ${classes.dismid}`}>
    <div className={classes.inner}>
        <div className={`${classes.result} ${classes.dismid}`}>
            <div className={`${classes.resbox}`}>
            {dis}
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