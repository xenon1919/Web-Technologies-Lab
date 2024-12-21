// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {" "}
          {/* Replaced Switch with Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/welcome/:username" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
