import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Product = ({ image, title, price, qty, id }) => {
  const { dispatchCart } = useContext(CartContext);
  const [productQty, setQty] = useState(qty);

  const addQty = () => {
    setQty((prev) => prev + 1);
    dispatchCart({ type: "ADD_QTY", payload: { id, qty: productQty } });
  };
  const reduceQty = () => {
    if (qty == 0) return;
    setQty((prev) => prev - 1);
    dispatchCart({ type: "REDUCE_QTY", payload: { id, qty: productQty } });
  };
  return (
    <div className="container">
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="row">
          <div className="col-md-4">
            <img src={image} alt={title} height="200px" width="100px"></img>
          </div>
          <div className="col-md-4">
            <h1>{title}</h1>
            {/* <p className="lead fw-bold">
              {qty} % ${price} = ${qty * price}
            </p> */}
            <button onClick={reduceQty} className="btn btn-outline-dark me-4">
              <i className="fa fa-minus"></i>
            </button>
            <div>{qty}</div>
            <button onClick={addQty} className="btn btn-outline-dark me-4">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((product, index) => {
        return (
          <Product
            key={index}
            title={product.title}
            image={product.image}
            qty={product.qty}
            id={product.id}
            price={product.price}
          />
        );
      })}
      <div className="container">
        <div className="row">
          <Link
            to="/placeorder"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
