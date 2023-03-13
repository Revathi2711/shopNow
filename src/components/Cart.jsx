import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../redux/actions/index";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleButton = (product) => {
    dispatch(addCart(product));
  };

  const product = (product) => {
    return (
      <div className="container">
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="100px"
              ></img>
            </div>
            <div className="col-md-4">
              <h1>{product.title}</h1>
              <p className="lead fw-bold">
                {product.qty} % ${product.price} = $
                {product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButton(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButton(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const button= ()=>{
    return(
      <div className="container">
        <div className="row">
          <Link to="/placeorder" className="btn btn-outline-dark mb-5 w-25 mx-auto">
            Place Order
            </Link>
        </div>
      </div>
      );
  }

  return(
  <>
  {state.length !== 0 && state.map(product)}
  </>
  ) 
};

export default Cart;
