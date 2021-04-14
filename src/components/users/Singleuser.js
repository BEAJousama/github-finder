import React, { useEffect , useContext } from 'react'
import Navbar from '../layouts/Navbar'
import Spinner from "../layouts/Spinner"
import Userhead from '../layouts/Userhead'
import HeadButtons from '../layouts/HeadButtons'
import Repos from '../repos/Repos'
import githubContext from "../../context/github/githubContext"

const Singleeuser = ({match}) => {

const GithubContext = useContext(githubContext)

useEffect(()=>{
    GithubContext.getUser(match.params.login)
    GithubContext.getUserRepos(match.params.login)
    //eslint-disable-next-line
},[]);
    
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
            company
            
        } = GithubContext.user;

        if (GithubContext.loading){
            return (
                <>
            <Navbar/>
            <Spinner/>
            </>)
          }
          else{ 
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

                        <Repos repos={GithubContext.repos}/>  
                    </div>
                    </div>
                </>
            )
        }
}

export default Singleeuser
