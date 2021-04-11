import React from 'react';
import Spinner from '../layouts/Spinner';
import Useritem from "./Useritem";

const User = ({users,loading}) => {
    if (loading){
      return (<Spinner/>)
    }
    else{   
      return (
        <> 
           <div style={UserStyle}>
        {users.map((user)=>{
            return(        
            <Useritem key={user.id} user={user} />
              )
        })}
        </div>
        </>
     
      )
      
    }  
}

const UserStyle = {
    display : 'grid',
    gridTemplateColumns : "repeat(3,1fr)",
    gridGap : '1rem'
}

export default User
