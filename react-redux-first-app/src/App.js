import { Provider } from 'react-redux';
import './App.css';
import Todos from './Components/Todos';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>React Redux First App</h1>
        <h2>Exciting to start redux</h2>
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
