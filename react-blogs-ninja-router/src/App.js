import NavBar from './NavBar';
import Home from './Home';
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// Switch is replaced as routes in latest version
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import CreateBlog from './CreateBlog';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
