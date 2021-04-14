
import './App.css';
import React from 'react'
import Home from "./components/pages/Home"
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';
import GithubState from "./context/github/GithubState";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Singleeuser from './components/users/Singleuser';
import AlertState from './context/alert/AlertState';




const App =()=> {
 
  return (
<GithubState>
<AlertState>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>          
          <Route path='/users/:login' component={Singleeuser}/>
          <Route path='*' component={Notfound}/> 
      </Switch>
    </Router>
    </AlertState>
</GithubState>    
  );
}

export default App;
