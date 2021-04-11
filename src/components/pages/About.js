import React from 'react'
import Navbar from "../layouts/Navbar"
const About = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="container all-center my-5 mx-auto">
          <h2>About this App !!</h2>
          <p>This is an app for github user searching !!</p>
          <p>Version : v1.1</p>
      </div>
    </>
  )
}

export default About
