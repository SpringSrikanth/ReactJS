import BlogView from "./features/blogs/BlogView";
import TodoView from "./features/todos/TodoView";

function App() {
  return (
    <div className="container-fluid">
      <h1>React Redux Toolkit Example</h1>
      <h6>Simple way to write redux</h6>
      <TodoView/>
      <br/>
      <BlogView/>
    </div>
  );
}

export default App;
