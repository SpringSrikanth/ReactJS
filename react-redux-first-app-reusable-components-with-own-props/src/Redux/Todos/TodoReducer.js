import { ADD_TODO, REMOVE_TODO } from "./TodoActionTypes";

const initialState ={
    numberOfTodos: 20,
    author:'Srikanth Yenagandula'
}

const todoReducer = (state = initialState,action) =>{
    switch (action.type) {
        case REMOVE_TODO: return {
            ...state,
           numberOfTodos: state.numberOfTodos - 1 
        }
        case ADD_TODO: return {
            ...state,
           numberOfTodos: state.numberOfTodos + Number(action.payload)
        }
        default: return state;
    }

}


//add reducer as default
export default todoReducer;