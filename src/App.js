
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing";
import Cybersecurity from './components/Cybersecurity';
import IOT from './components/IOT';
import Robotics from './components/Robotics';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import About from './components/About us/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing /> 
      <About/>
      <Cybersecurity />
      <Robotics />
      <IOT /> 
      
      <Footer/>
    </div>
  );
}

export default App;
