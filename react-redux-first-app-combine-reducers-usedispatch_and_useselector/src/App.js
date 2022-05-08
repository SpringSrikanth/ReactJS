import { Provider } from 'react-redux';
import './App.css';
import Books from './Components/Books';
import Todos from './Components/Todos';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>React Redux First App</h1>
        <h2>Exciting to start redux</h2>
        <Todos/>
        <Books/>
      </div>
    </Provider>
  );
}

export default App;
