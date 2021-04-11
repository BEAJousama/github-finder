
import './App.css';
import React, { Component } from 'react'
import axios from "axios";
import User from "./components/users/User";
import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import Search from "./components/users/Search";
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Singleeuser from './components/users/Singleuser';




class App extends Component {

  state = {
    users : [],
    loading : false,
    alert: null,
    user : {},
    repos : []
  }

  async componentDidMount(){

    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users : res.data , loading : false});

  }

  searchUsers = async text =>{
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users : res.data.items , loading : false});
}
  clearUsers = () =>{
    this.setState({loading : true});
    this.setState({users : [] , loading : false});
}
setAlert =(msg,type)=>{
this.setState({alert :{msg,type}});
setTimeout(()=>{
  this.setState({alert :null})
},5000)
}

 getUser = async (login) =>{
  this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user : res.data , loading : false});

}

getUserRepos = async (login) => {
  this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users/${login}/repos?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos : res.data , loading : false});
}
  render(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' render = {props => (
          <div className="App">
              <Navbar title="Gitlab Finder" icon="fab fa-gitlab"/>
              
              <div className="container text-center">
                <Alert alert={this.state.alert} />
                <Search 
                searchUsers = {this.searchUsers} 
                clearUsers = {this.clearUsers} 
                showClear = {this.state.users.length > 0 ? true : false}
                setAlert = {this.setAlert}
                />
                <User loading={this.state.loading} users={this.state.users} />      
              </div>     
          </div>
          )}/>

          <Route exact path='/about' component={About}/>          
          <Route path='/users/:login' render = { props => (
          <Singleeuser {...props} getUser = {this.getUser} user={this.state.user} loading = {this.state.loading} 
          getUserRepos = {this.getUserRepos} repos = {this.state.repos}

          /> 
          )}/>

      </Switch>
    </Router>
    
  );
  }
}

export default App;
