// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import VideoDetail from './VideoDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/videos/:id" element={<VideoDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
