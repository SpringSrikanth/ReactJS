const TodoList = ({todos,deleteTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo =>
                    <li className="list-group-item" key={todo.id}>
                        <h2>{todo.title}</h2>
                        <button className="btn btn-primary" onClick={()=> deleteTodo(todo.id)}>Delete Todo</button>
                    </li>
                )
            }
        </ul>
    )
}
 
export default TodoList;