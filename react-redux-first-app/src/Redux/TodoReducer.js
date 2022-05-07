import { REMOVE_TODO } from "./TodoActionTypes";

const initialState ={
    numberOfTodos: 10,
    author:'Srikanth Yenagandula'
}

const todoReducer = (state = initialState,action) =>{
    switch (action.type) {
        case REMOVE_TODO: return {
            ...state,
           numberOfTodos: state.numberOfTodos - 1 
        }
        default: return state;
    }

}


//add reducer as default
export default todoReducer;