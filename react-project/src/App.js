import React from 'react';
import './App.css';

const title= "My First React Project";
const user = {
  name : "Koseksi Pachipulusula",
  emailVerified: false,
  activated: true
}

const languages= [
  "Telugu",
  "Hindi",
  "English"
]

function App() {
  return (
    <>
      <h1>Hi Srikanth Yenagandula !</h1>
      <p>Welcome to React Js Courses</p>
      <p>{title}</p>
      <p>User Details</p>
      <p id="user_name">Name : {user?.name}</p>
      <p className="label">Email Verified : {user?.emailVerified ? "Yes" : "No" }</p>
      <p>activated : {user?.activated ? "Yes" : "No" }</p>
      <h3>Known languages</h3>
      {languages.map((item,index) => <p key={index}>{item}</p>)}
    </>
  );
}

export default App;
