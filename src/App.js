
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing";
import Cybersecurity from './components/Cybersecurity';
import IOT from './components/IOT';
import Robotics from './components/Robotics';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing /> 
       <Cybersecurity />
      <IOT /> 
      <Robotics /> 
    </div>
  );
}

export default App;
