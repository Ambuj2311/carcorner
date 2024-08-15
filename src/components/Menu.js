import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';
import Logo from '../images/CLogo2.png';
function Menu(){
    return (
      <div className='row sticky-top m-0'>
      <div className='col-sm-1' ><img src={Logo} className='logo' alt='Car Corner Logo'/></div>
          <nav className="navbar navbar-expand-lg col-sm-11 menu">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CarCorner</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Trending">Trending Cars</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Upcoming">Upcoming Cars</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Vintage">Vintage Cars</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact Us</Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</div>
      );
}

export default Menu;