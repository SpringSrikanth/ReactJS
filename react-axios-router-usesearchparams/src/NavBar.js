import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <>
            <nav className="navbar navbar-dark bg-primary" style={{position:"sticky",top:0,zIndex:200}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Axios API</Link>
                    <ul className="navbar-nav" style={{ flexDirection: "row" }}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/invoices" className="nav-link">Invoices</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
 
export default NavBar;