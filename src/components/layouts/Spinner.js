import React from 'react'
import spinner from "./spinner.gif"

const Spinner = ()=> {

  return (
    <div className="container text-center">
            <img src={spinner} alt="spinner"  style={{width : "200px", margin:"auto",display:"auto" }}/>
          </div>
         ) 
}

    

export default Spinner
