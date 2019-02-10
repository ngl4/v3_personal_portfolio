import React, { Component } from "react";
import "./SideNav.css";

class SideNav extends Component {
  openNav = () => {
    this.refs.mySidenav.style.width = "60%";
  };

  closeNav = () => {
    this.refs.mySidenav.style.width = "0";
  };
  render() {
    return (
      <nav className="fixed-top nav-color">
        <div ref="mySidenav" className="sidenav">
          <div className="closebtn" onClick={this.closeNav}>
            &times;
          </div>
          <ul className="waves">
            <li>
              <a href={this.props.AboutUrl}>About</a>
            </li>
            <li>
              <a href={this.props.PortfolioUrl}>Portfolio</a>
            </li>
            <li>
              <a href={this.props.ContactUrl}>Contact</a>
            </li>
          </ul>
        </div>

        <span className="nav-icon" onClick={this.openNav}>
          {/* &#9776; */}
          <img src={this.props.image} alt="logo" className="img-logo" />
        </span>
      </nav>
    );
  }
}

export default SideNav;
