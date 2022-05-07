import AxiosClient from "../../Axios/AxiosClient"
import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS, SELECTED_USER_DETAILS, SELECTED_USER_DETAILS_FAILURE, SELECTED_USER_DETAILS_SUCCESS } from "./UserActionTypes"

export const loadUsers = () =>{
    return {
        type: LOAD_USERS
    }
}

export const loadUsersSuccess = (users) =>{
    return {
        type: LOAD_USERS_SUCCESS,
        payload:users
    }
}

export const loadUsersFailure = (error) =>{
    return {
        type: LOAD_USERS_FAILURE,
        payload:error
    }
}

export const selectedUserDetails = ()=>{
    return {
        type: SELECTED_USER_DETAILS
    }
}

export const selectedUserDetailsSuccess = (selectedUser)=>{
    return {
        type: SELECTED_USER_DETAILS_SUCCESS,
        payload:selectedUser
    }
}

export const selectedUserDetailsFailure = ()=>{
    return {
        type: SELECTED_USER_DETAILS_FAILURE
    }
}


//Adding thunk for calling async requests and store the value inside state;
export const fetchUsers = () =>{
    return (dispatch)=>{
        dispatch(loadUsers());
        AxiosClient.get('users').then(res=>res.data).then(res=>{
            dispatch(loadUsersSuccess(res));
        }).catch(error=>{
            dispatch(loadUsersFailure(error.message));
        })
    }
}


export const fetchUserById = (id)=>{
    return (dispatch) => {
        dispatch(selectedUserDetails());
        AxiosClient.get(`users/${id}`)
        .then(res => res.data)
        .then(res => {
            dispatch(selectedUserDetailsSuccess(res))
        })
        .catch(error => dispatch(selectedUserDetailsFailure(error.message)))
    }
}