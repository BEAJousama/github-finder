import React, {useReducer ,useEffect } from 'react';
import axios from "axios";
import GithubContext from "../github/githubContext";
import GithubReducer from "../github/githubReducer";
import{
    FETCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SEARCH_USERS
} from "../types";

const GithubState = props => {
    const initialState = {
        users: [],
        user : {},
        repos : [],
        loading: false
    };
    const [state, dispatch] = useReducer(GithubReducer,initialState);


//searchUsers
const searchUsers = async text =>{
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
    })

}
//clearusers
const clearUsers = () =>{
    dispatch({
        type : CLEAR_USERS,
        payload:[]
    })  
  }

//getusers
const getUser = async (login) =>{
    setLoading();
      const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
      dispatch({
        type : GET_USER,
        payload:res.data
    })}

//setLoading

const setLoading = () => dispatch({type:SET_LOADING});
//getrepos
const getUserRepos = async (login) => {
    setLoading();
      const res = await axios.get(`https://api.github.com/users/${login}/repos?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
      dispatch({
        type : GET_REPOS,
        payload:res.data
    })}

//fetchusers  
const fetchUsers = async users =>{
    setLoading();
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.APP_GITHUB_CLIENT_ID}&client_secret=${process.env.APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
        type : FETCH_USERS,
        payload:res.data
    });
  }
useEffect(() => {
   fetchUsers();
       //eslint-disable-next-line
  }, []);

return(
    <GithubContext.Provider
    value={{
        users : state.users,
        user:state.user,
        loading : state.loading,
        repos:state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        fetchUsers
        
    }}
    >
    {props.children}

    </GithubContext.Provider>
)

}
export default GithubState;