import React, { Component } from 'react'
import { BsGithub } from "react-icons/bs";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
          <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center gap-2">
            <BsGithub/> {this.props.title }
          </Link>

          <ul className="navbar-nav ">
            <li className="nav-item">
            <Link to="/about" className='nav-link'>
              Hakkımızda
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className='nav-link'>
              Profil
            </Link>
            </li>
          </ul>
          
      </nav>
    )
  }
}

Navbar.defaultProps ={
    title: "Github Finder"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}




export default Navbar