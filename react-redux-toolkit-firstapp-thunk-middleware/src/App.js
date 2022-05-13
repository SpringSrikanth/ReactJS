import BlogView from "./features/blogs/BlogView";
import TodoView from "./features/todos/TodoView";
import UsersView from "./features/users/UsersView";

function App() {
  return (
    <div className="container-fluid">
      <h1>React Redux Toolkit Example</h1>
      <h4>Simple way to write redux</h4>
      <UsersView/>
    </div>
  );
}

export default App;
