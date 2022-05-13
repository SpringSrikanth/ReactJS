import { ADD_TODO, REMOVE_TODO } from "./TodoActionTypes"
export const  removeTodo = () =>{
    return {
      type:REMOVE_TODO
    }
}

export const  addTodo = (payload=1) =>{
  return {
    type:ADD_TODO,
    payload
  }
}