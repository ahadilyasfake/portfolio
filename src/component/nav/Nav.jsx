import React from "react";
import "./Nav.css"

export default function Nav() {

  
  return (
    <header>
      <nav>
        <div class="head-logo">
          <span className="logo-less">&lt;&nbsp;</span>
          <span className="logo-text">Ahad Ilyas</span>
          <span className="logo-greater">&nbsp;/&gt;</span>
        </div>
      <ul className="nav-list">
        <li>Skill</li>
        <li>Achivement</li>
        <li>Education</li>
        <li>Open Source</li>
        <li>Contact Me</li>
      </ul>
      </nav>
    </header>
  );
}

