import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>{props.anything}</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
