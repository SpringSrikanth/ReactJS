import { ADD_TODO, REMOVE_TODO } from "./TodoActionTypes"
export const  removeTodo = (payload) =>{
    return {
      type:REMOVE_TODO,
      payload
    }
}

export const  addTodo = (payload=1) =>{
  return {
    type:ADD_TODO,
    payload
  }
}