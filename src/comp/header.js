import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
          <nav className=" navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link id="move" className="navbar-brand text-danger fw-bolder" to="/home">
            Navbar
          </Link>
          <button
            className="navbar-toggler bg-success"
            type="button "
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation "
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id='lo' className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                
              <NavLink className="nav-link " aria-current="page" to="/one"  >
          
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/two">
                  Link
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/three">
                  active
                </NavLink>
              </li>
          
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;
