import { useContext } from "react"
import ProjectDetails from "./Contexts/ProjectDetails";

function Header() {
  const {name}= useContext(ProjectDetails);
  return (
      <div className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">{name}</a>
          </div>
      </div>
  )
}

export default Header