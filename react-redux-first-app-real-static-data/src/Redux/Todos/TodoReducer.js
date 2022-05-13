import { ADD_TODO, REMOVE_TODO } from "./TodoActionTypes";

const initialState = {
    todos: [
        {
            id: 1,
            name: "Started Learning React",
            description: "Follow React Tutorails Through Google and Youtube",
            createdBy: "Srikanth Y"
        },
        {
            id: 2,
            name: "Started Learning Anuglar",
            description: "Follow Anuglar Tutorails Through Google and Youtube",
            createdBy: "Naveen Kumar"
        },
        {
            id: 3,
            name: "Started Learning Angular and Spring Boot",
            description: "Follow React Tutorails Through Google and Youtube",
            createdBy: "Abhinay G"
        },
        {
            id: 4,
            name: "Started Learning Node Js",
            description: "Follow Node Js Tutorails Through Google and Youtube",
            createdBy: "Naveen Kumar"
        },
        {
            id: 5,
            name: "Started Learning React",
            description: "Follow React Tutorails Through Google and Youtube",
            createdBy: "Raju D"
        }
    ],
    numberOfTodos: 5
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_TODO: return {
            ...state,
            todos : state.todos.filter(todo => todo.id !== action.payload),
            numberOfTodos: state.numberOfTodos - 1
        }
        case ADD_TODO: return {
            ...state,
            todos:[...state.todos,{...action.payload,id:state.todos.length + 1}],
            numberOfTodos: state.numberOfTodos + 1
        }
        default: return state;
    }

}


//add reducer as default
export default todoReducer;