import React from 'react'

const HeadButtons = (props) => {
  return (
    <>
        <nav className="navbar">
                 <ul>
                 <li><button className="btn btn-primary">Public_repos : {props.public_repos}</button></li>
                 <li><button className="btn btn-primary">Public_gists : {props.public_gists}</button></li>
                 <li><button className="btn btn-primary">Followers : {props.followers}</button></li>
                 <li><button className="btn btn-primary">Following : {props.following}</button></li>
                 {props.hireable ? <li><button className="btn btn-success">Hireable : <i class="fas fa-check" aria-hidden="true"></i> </button></li> :
                 <li><button className="btn btn-primary">Hireable : <i class="fas fa-times-circle    "></i> </button></li>}
                 </ul>
        </nav>
      
    </>
  )
}

export default HeadButtons