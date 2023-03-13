import React from "react";
import {RiLoginCircleFill} from "react-icons/ri"
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
   const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
         Shop Now
          </Link>
          <button
           className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/products">Products</Link>
              </li>
         
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to ="/contact">Contact</Link>
              </li>
            </ul>

            <div className="buttons">
             <Link to="/login" className="btn btn-danger ms-2">
             <RiLoginCircleFill/> Login</Link>
                
             <Link to="/register" className="btn btn-danger ms-2">
             <i className="fa fa-user me-1"/>Register</Link>

                
             <Link to="/cart" className="btn btn-danger ms-2">
              <span className="fa fa-cart-plus me-1"></span>Cart
              </Link>
              



            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
