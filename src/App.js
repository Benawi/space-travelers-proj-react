import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Rocket from './components/Rocket/Rocket';
import Mission from './components/Mission/Mission';
import Dragon from './components/Dragon/Dragon';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (

    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Dragon" element={<Dragon />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
