const Notes = () => {
    return ( 
        <div className="container">
            <h4>How to setup React router</h4>
            <ul className="list-group">
                <li className="list-group-item"> First install react-router-dom using "npm install react-router-dom"</li>
                <li className="list-group-item"> `Import BrowserRouter using import "{" BrowserRouter "}" from 'react-router-dom'"`</li>
                <li className="list-group-item"> `Import Switch using import "{" Switch "}" from 'react-router-dom'"`</li>
                <li className="list-group-item"> `Import Route to load components based on route using import "{" Route "}" from 'react-router-dom'"`</li>
                <li className="list-group-item"> `Add componets in the route`</li>
            </ul>
        </div>
     );
}
 
export default Notes;