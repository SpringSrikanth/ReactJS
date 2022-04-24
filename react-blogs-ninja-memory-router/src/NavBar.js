import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blogs Web</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;