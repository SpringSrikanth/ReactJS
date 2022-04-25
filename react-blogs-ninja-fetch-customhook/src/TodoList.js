const TodoList = ({todos}) => {
    return ( 
        <div className="blog-list">
            {todos.map(todo=>(
                <div className="blog-preview" key={todo.id}>
                    <h1>Title: {todo.title}</h1> 
                    <p>Created By: {todo.createdBy}</p>   
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;