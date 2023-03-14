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
    if (qty == 1) return;
    setQty((prev) => prev - 1);
    dispatchCart({ type: "REDUCE_QTY", payload: { id, qty: productQty } });
  };

  const removeFromCart = (product)=>{
    dispatchCart({type:'REMOVE_FROM_CART',payload:id})
  }

  return (
    <div className="container">
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="row">
          <div className="col-md-4">
            <img src={image} alt={title} height="200px" width="100px"></img>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-start">
            <h1>{title}</h1>
            <p className="lead fw-bold">
              {qty} - ${price} = ${qty * price}
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={reduceQty} className="btn btn-outline-dark ">
                <i className="fa fa-minus"></i>
              </button>
              <p className="mt-3 px-5 display-6">{qty}</p>
              <button onClick={addQty} className="btn btn-outline-dark ">
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <div>
              <button onClick={removeFromCart} className="btn my-2 btn-outline-dark">
                Remove
              </button>
            </div>
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
