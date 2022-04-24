import './App.css';
import ShowFileUpload from './ShowFileUpload';
import ShowInput from './ShowInput';

const showInput=true;

function App() {
  return (
    <div className="App">
      <h3>React Conditional Part 3 </h3>
      { !showInput ?  <ShowFileUpload/> : <ShowInput/>}
    </div>
  );
}

export default App;
