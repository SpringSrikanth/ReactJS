import './App.css';

function Steps(){
  const referenceUrl = "https://stackoverflow.com/questions/40037657/how-to-include-bootstrap-css-and-js-in-reactjs-app";
  return(
    <>
      <h4>Steps to install bootstrap in react</h4>
      <ul>
        <li>Run Command "npm install bootstrap --save"</li>
        <li>Add import statement in index.js file "import 'bootstrap/dist/css/bootstrap.min.css'; or 
        import '../node_modules/bootstrap/dist/css/bootstrap.min.css';"</li>
        <li>For more <a href={referenceUrl} target="_blank" rel="noopener noreferrer">click here</a></li>
      </ul>
    </>
  )
}

function App() {
  return (
    <div className="container">
      <h1>App Component</h1>
      <input className="form-control col-md-6" type="text" placeholder="Enter your name"/>
      <Steps/>
    </div>
  );
}

export default App;
