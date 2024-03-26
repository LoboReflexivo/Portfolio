import React from "react";

export default function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className="nav-header">
          <ul className="nav-header-list">
            <li className="nav-header-item">
              <a href="#about-me" className="nav-header-item-link">
                About me
              </a>
            </li>
            <li className="nav-header-item">
              <a href="#projects" className="nav-header-item-link">
                Projects
              </a>
            </li>
            <li className="nav-header-item">
              <a href="#studies" className="nav-header-item-link">
                Studies
              </a>
            </li>
            <li className="nav-header-item">
              <a href="#hobbies" className="nav-header-item-link">
                Hobbies
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
