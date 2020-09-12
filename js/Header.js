import React from 'react';

const Header = () => (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="navbrand">S.S.</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <a className="nav-link active" href="#intro">Introduction</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#hobby">Hobbies</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
          </li>
          </ul>
          <span className="navbar-right">
          <a href="https://www.facebook.com" target="_blank"><img
              src="assets/img/facebook.png" /></a>
          <a href="https://github.com" target="_blank"><img src="assets/img/github.png" /></a>
          <a href="https://www.linkedin.com" target="_blank"><img
              src="assets/img/linkedin.png" /></a>
          </span>
        </div>
      </nav>
    </header>
);

export default Header;