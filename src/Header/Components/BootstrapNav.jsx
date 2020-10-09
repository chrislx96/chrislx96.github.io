import React from "react";

class BootstrapNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentPage, onNavItemClick} = this.props;

    const activeStyle = "nav-link active";
    const inactiveStyle = "nav-link";

    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item" >
          <a className={(currentPage === "intro")?activeStyle:inactiveStyle} href="#intro" onClick = {onNavItemClick("intro")}>
            Introduction
          </a>
        </li>
        <li className="nav-item" >
          <a className={(currentPage === "resume")?activeStyle:inactiveStyle} href="#resume" onClick = {onNavItemClick("resume")}>
            Resume
          </a>
        </li>
        <li className="nav-item" >
          <a className={(currentPage === "hobby")?activeStyle:inactiveStyle} href="#hobby" onClick = {onNavItemClick("hobby")}>
            Hobbies
          </a>
        </li>
        <li className="nav-item" >
          <a className={(currentPage === "contact")?activeStyle:inactiveStyle} href="#contact" onClick = {onNavItemClick("contact")}>
            Contact
          </a>
        </li>
      </ul>
    );
  }
}

export default BootstrapNav;
