import { NavLink } from "react-router-dom";
const NavBar = () => {
    return ( 
        <>
            <nav className="navbar navbar-dark bg-primary" style={{position:"sticky",top:0,zIndex:200}}>
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">Axios API</NavLink>
                    <ul className="navbar-nav" style={{ flexDirection: "row" }}>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/invoices" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Invoices</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
 
export default NavBar;