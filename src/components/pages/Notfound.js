import React from 'react';
import Navbar from '../layouts/Navbar'

const Notfound = () => {
  return (
    <>
       <Navbar></Navbar>
      <div className="container text-center my-5 mx-auto">
          <h2>PAGE NOT FOUND !!</h2> <br/>
          <p>This page could be deleted by ahe owner or it doesn't exist !!</p>
          <p></p>
      </div>
      
    </>
  )
}

export default Notfound
