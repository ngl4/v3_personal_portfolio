import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
    
  render() {
    return (
      <nav className="p-3 fixed-top">
        <div className="ml-5 d-flex justify-content-between text-white font-weight-bold">
          <div className="mr-5">
            <span onClick={this.props.onClick}><img src={this.props.image} alt="logo" className="img-logo" /></span>
          </div>

          <div className="d-flex mr-5">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active " href={this.props.AboutUrl} style={this.props.style}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={this.props.PortfolioUrl} style={this.props.style}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={this.props.ContactUrl} style={this.props.style}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;


