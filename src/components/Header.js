import React from "react";
import navLogo from "../images/Vector.png"

export default function Header(){
  return(
      <nav className="nav">
        <img src={navLogo} className="nav-image"/>
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Service</li>
        </ul>
      </nav>
  )
}