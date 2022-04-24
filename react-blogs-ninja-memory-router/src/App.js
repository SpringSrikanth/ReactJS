import NavBar from './NavBar';
import Home from './Home';
import CreateBlog from './CreateBlog';
import About from './About';
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// Switch is replaced as routes in latest version
import { MemoryRouter as Router,Outlet,Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
      <div className="content">
          {/* <Switch> in latest react-router switch is replaced as routes */}
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/create" exact element={<CreateBlog/>} />
            <Route path="/about" exact element={<About/>} />
          </Routes>
          {/* </Switch> */}
      </div>
        </Router>
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet/>
    </div>
  );
}

export default App;
