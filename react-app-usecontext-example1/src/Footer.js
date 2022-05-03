import { useContext } from "react"
import ProjectDetails from "./Contexts/ProjectDetails";

function Footer() {
  const {name,author,startedYear}= useContext(ProjectDetails);
    return (
        <div className="container-fluid">
            <h5>{name} {startedYear}- ALL Rights Reserved</h5>
            <p>{author}</p>
        </div>
    )
}

export default Footer