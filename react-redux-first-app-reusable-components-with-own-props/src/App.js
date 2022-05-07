import { Provider } from 'react-redux';
import './App.css';
import CommonContainer from './Components/CommonContainer';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1 className='m-3'>React Redux First App</h1>
        <h2 className='m-3'>Exciting to start redux</h2>
        <CommonContainer className="p-1 m-3"/>
        <CommonContainer todos className="p-1 m-3"/>
      </div>
    </Provider>
  );
}

export default App;
