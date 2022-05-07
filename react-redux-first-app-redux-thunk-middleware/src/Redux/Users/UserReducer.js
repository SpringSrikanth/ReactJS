import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS, SELECTED_USER_DETAILS, SELECTED_USER_DETAILS_FAILURE, SELECTED_USER_DETAILS_SUCCESS } from "./UserActionTypes";

const initialState = {
    loading: true,
    users:[],
    seletedUserDetails:null,
    error:null
}

const UserReducer = (state=initialState,action) =>{
    switch (action.type) {
        case LOAD_USERS: return {
            ...state,
            loading: true,
            error:null
        }
        case LOAD_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error:null
        }
        case LOAD_USERS_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload
        }

        case SELECTED_USER_DETAILS :return{
            ...state,
            error:null
        }
        case SELECTED_USER_DETAILS_SUCCESS :return{
            ...state,
            seletedUserDetails:action.payload,
            error:null
        }
        case SELECTED_USER_DETAILS_FAILURE :return{
            ...state,
            error:action.payload
        }

        default: return state;
    }
}


export default UserReducer;