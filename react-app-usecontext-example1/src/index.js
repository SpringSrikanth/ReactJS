import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProjectDetails from './Contexts/ProjectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const projectInfo={
  name:"Context Example",
  author:"Srikanth Y(SpringSrikanth)",
  authorNickname:"Koseksi",
  startedYear:"2022",
}
root.render(
  <React.StrictMode>
    <ProjectDetails.Provider value={projectInfo}>
      <App />
    </ProjectDetails.Provider>
  </React.StrictMode>
);
reportWebVitals();
