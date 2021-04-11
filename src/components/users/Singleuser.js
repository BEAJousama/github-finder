import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'
import Userhead from '../layouts/Userhead'
import HeadButtons from '../layouts/HeadButtons'
import Repos from '../repos/Repos'

class Singleeuser extends Component {

componentDidMount(){
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
} 
    render() {
        const {
            login,
            avatar_url,
            location,
            bio,
            name,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company,
            
        } = this.props.user;
        const {repos} = this.props
    return (
        <>
            <Navbar/>
            <div className="container">
                <HeadButtons
                public_repos = {public_repos}
                public_gists = {public_gists}
                followers = {followers}
                following = {following}
                hireable = {hireable}
                />
            <Userhead
                login = {login}
                avatar_url = {avatar_url}
                location = {location}
                bio={bio}
                name = {name}
                html_url ={html_url}
                company = {company}
            />
                
            <div className="card3">
            <h2>Public Repos :</h2>

                <Repos repos={repos}/>  
            </div>
            </div>
        </>
    )
  }
}

export default Singleeuser
