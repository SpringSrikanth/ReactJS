import NavBar from './NavBar';
import Home from './Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
