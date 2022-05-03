import ProjectDetails from "./Contexts/ProjectDetails";

function Content() {
    return (
        <div className="container-fluid">
            <ProjectDetails.Consumer>
                {({authorNickname})=>(<h1>{authorNickname}</h1>)}
            </ProjectDetails.Consumer>
        </div>
    )
}

export default Content