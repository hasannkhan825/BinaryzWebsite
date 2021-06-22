
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing /> 
      {/* <Cybersecurity />
      <IOT /> 
      <Robotics /> */}
    </div>
  );
}

export default App;
