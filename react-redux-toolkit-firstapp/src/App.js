import BlogView from "./features/blogs/BlogView";
import TodoView from "./features/todos/TodoView";

function App() {
  return (
    <div>
      <h1>React Redux Toolkit Example</h1>
      <p>Simple way to write redux</p>
      <TodoView/>
      <br/>
      <BlogView/>
    </div>
  );
}

export default App;
