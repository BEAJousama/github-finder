import React from 'react'

const RepoItem = ({repo}) => {
  return (
    
      
                <div className="card4">    
                    <a href={repo.html_url}>{repo.name} </a>      
                    <p><small> {repo.description} </small></p>
                    <h5> <i class="fa fa-dot-circle color-icon" aria-hidden="true">  {repo.language}</i>  </h5>
                </div>
   
    
  )
}

export default RepoItem
