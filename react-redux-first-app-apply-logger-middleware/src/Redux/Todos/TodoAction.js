import { REMOVE_TODO } from "./TodoActionTypes"

//Actions creater for remove todo
export const  removeTodo = () =>{
    return {
      type:REMOVE_TODO
    }
}