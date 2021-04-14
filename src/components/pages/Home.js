import React, { Fragment } from 'react';
import Search from "../users/Search";
import Alert from "../layouts/Alert";
import Navbar from "../layouts/Navbar";
import User from "../users/User"

const Home = () => (
    <Fragment>
    <Navbar title="Gitlab Finder" icon="fab fa-gitlab"/>        
    <div className="container text-center">
      <Alert/>
      <Search/>
      <User/>      
    </div>     
</Fragment>
)

export default Home;
