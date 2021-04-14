import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext'
import alertContext from '../../context/alert/alertContext'

// import PropTypes from 'prop-types'
const Search = () => {
 
  const AlertContext = useContext(alertContext);
  const GithubContext = useContext(githubContext);
  const [text,setText] = useState("");
    // static proptypes = { 
    //     searchUsers : PropTypes.func.isRequired,
    //     showClear: PropTypes.func.isRequired,
    //     clearUsers : PropTypes.func.isRequired
    // };
   const onChange = (e)=>{
    setText(e.target.value)
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            AlertContext.setAlert("You have to enter something !!","info");
        }else{
        GithubContext.searchUsers(text);
        setText('');}
    };

  
    return (
      <>
    <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search Users..." value={text} onChange = {onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block"  />
    </form> 
    
        {GithubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick = {GithubContext.clearUsers}>Clear</button>
)}

    
      </>
    )
  
  }


export default Search
