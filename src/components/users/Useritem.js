import React from 'react';
import { Link } from 'react-router-dom'


const Useritem = ({user}) => {  
        const {login,avatar_url} = user;
        return (
            <div className="card1 text-center">
                <img 
                src={avatar_url} 
                alt="" 
                className="round-img"
                style={{width : "60px"}}            
                />
                <h3>{login}</h3>
                <div>
                    <Link to ={`/users/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>            
            </div>
        )   
}
export default Useritem;
