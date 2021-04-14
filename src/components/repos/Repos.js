import React, {useContext} from 'react'
import RepoItem from './RepoItem'
import githubContext from "../../context/github/githubContext"

const Repos = () => {
const GithubContext = useContext(githubContext);
  return GithubContext.repos.map(repo => {
    
         return <RepoItem repo = {repo} key={repo.id} />
      })  
}

export default Repos
