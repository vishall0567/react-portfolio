import React from "react";
import img3 from "../images/arrow-down-circle.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-container container">
            <div>
              <h1 className="navbar-brand">
                <strong>PortFolio</strong>
              </h1>
            </div>
            <ul className="menu-items">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#my-works">Portfolio</a>
              </li>
              <li>
                <a href="#contact-me">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="home-content" id="home-page">
          <div className="name">
            <h1>Hi, I'm Vishal</h1>
            <p>A Full Stack Web Developer.</p>
          </div>
          <div className="angle-down-icon">
            <a href="#about">
              <img src={img3} alt="" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
