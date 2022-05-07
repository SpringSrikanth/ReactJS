import { Provider } from 'react-redux';
import './App.css';
import AddTodo from './Components/AddTodo';
import Books from './Components/Books';
import BooksWithInput from './Components/BooksWithInput';
import Todos from './Components/Todos';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>React Redux First App</h1>
        <h2>Exciting to start redux</h2>
        <Todos/>
        <AddTodo/>
        <Books/>
        <BooksWithInput/>
      </div>
    </Provider>
  );
}

export default App;
