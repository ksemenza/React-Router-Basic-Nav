
import React from 'react';
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
     <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="./About.js">About</Link>
        </div>
        <div>
    <Link to="./Contact.js">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;