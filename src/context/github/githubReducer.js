import{
    FETCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SEARCH_USERS
} from "../types";


const githubReducer = (state,action) =>{
switch(action.type) {
    case SET_LOADING:
        return {
            ...state,
            loading: true
        }
    case SEARCH_USERS:
        return {
            ...state,
            users: action.payload,
            loading: false
        }
    case CLEAR_USERS:
        return{
            ...state,
            users:action.payload,
            loading:false
        }
    case GET_USER:
        return{
            ...state,
            user:action.payload,
            loading:false
        }
    case GET_REPOS:
        return{
            ...state,
            repos:action.payload,
            loading:false
        }
    case FETCH_USERS:
        return{
            ...state,
            users:action.payload,
            loading:false
        }
        default:{} 
    
}
}
export default githubReducer;