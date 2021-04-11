import React from 'react'

const Userhead = (props) => {

  return (
    <>
          <div className="all-left card ">
            <img src={props.avatar_url} alt="avatar" className="round-img" />
            <h2 className="p-2 text-center">{props.name}</h2>
            <h3 style={{fontWeight : "lighter"}}>@{props.login}</h3>
            <a href ={props.html_url} className="btn btn-dark btn-sm btn-block p-1 my-1 text-center">Github Profile</a>
            <p className="py-1" style={{}}>{props.bio}</p>
            <p>
            <i class="fa fa-building" aria-hidden="true">   </i> {props.company}<br/>
            <i class="fas fa-map-marker-alt" aria-hidden="true">   </i>  {props.location}
            </p>
          </div>
    </>
  )
}

export default Userhead
