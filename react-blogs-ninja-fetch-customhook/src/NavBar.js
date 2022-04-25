import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blogs Web</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/new"
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px'
                    }}
                >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;