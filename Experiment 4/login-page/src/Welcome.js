// src/Welcome.js
import React from "react";
import { useParams } from "react-router-dom";

function Welcome() {
  const { username } = useParams();

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>You've successfully logged in.</p>
    </div>
  );
}

export default Welcome;
