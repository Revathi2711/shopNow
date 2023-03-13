import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/shopbg.jpg'
import Products from "./Products";



const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img className="card-img" src={img1} alt=""  height="500px"/>
        <div className="card-img-overlay d-flex flex-column
        justify-content-center">
        <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            ENJOY THE TRENDS 
          </p>
 </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
///https://lovepik.com/creative/