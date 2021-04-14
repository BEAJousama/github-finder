import React, {useContext} from 'react';
import Spinner from '../layouts/Spinner';
import Useritem from "./Useritem";
import githubContext from '../../context/github/githubContext'
const User = () => {
  const GithubContext = useContext(githubContext);
  
    if (GithubContext.loading){
      return (<Spinner/>)
    }
    else{   
      return (
        <> 
           <div style={UserStyle}>
        {GithubContext.users.map((user)=>{
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
