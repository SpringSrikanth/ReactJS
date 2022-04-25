import useFetch from "./Hooks/useFetch";
import TodoList from "./TodoList";

const Todo = () => {
    const {data,pending,errorMessage} = useFetch('http://localhost:3001/todos');

    return ( 
        <div className="home">
           { pending ? <h4>Loading</h4> :  <TodoList todos={data} /> }
        </div>
     );
}
 
export default Todo;