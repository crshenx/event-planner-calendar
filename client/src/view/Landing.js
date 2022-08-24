import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Landing;
