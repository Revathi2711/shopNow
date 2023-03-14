import React, { useState,useContext} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {Link} from "react-router-dom";


const PlaceOrder = () => {
  const navigate = useNavigate();
  const {cart,dispatchCart} = useContext(CartContext)
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(inputs)
    // if (!cart.length) return alert('Please add items to cart')
    const {data} = await axios.post('http://localhost:1337/api/order/create',{
      firstname:inputs.firstname,
      lastname:inputs.lastname,
      email:inputs.email,
      address:inputs.address,
      country:inputs.country,
      state:inputs.state,
      zip:inputs.zip,
      products:cart
    },{headers:{
      'Content-Type':'application/json'
    }})
    console.log(data.status)
    if(data.status === 'success'){
      alert('Order placed successfully')
      dispatchCart({type:'EMPTY'})
      navigate('/')
    }else{
      alert('Your order did not placed, Please try again')
    }
  }

  return (
    <div className="m-5 row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
            </div>
            <span className="text-success">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="col-md-7 col-lg-8">
        <h4 className="mb-3"> Place Order</h4>

        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstname" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              onChange={handleChange}
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder=""
              name="lastname"
              onChange={handleChange}
              required=""
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                required=""
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              name="address"
              onChange={handleChange}
              required=""
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-md-5">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              onChange={handleChange}
              placeholder="India"
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              onChange={handleChange}
              placeholder="Karnataka"
              name="state"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              onChange={handleChange}
              placeholder="56006"
              required=""
            />
            <div className="invalid-feedback">Pincode required.</div>
          </div>
        </div>

        <hr className="my-4" />

        <h4 className="mb-3">Payment</h4>

        <div className="my-4">
          <Link to="/orderscreen" className="w-100 btn btn-primary btn-lg" type="submit">
            Place Order
          </Link>
          
        </div>



      </form>
    </div>
  );
};

export default PlaceOrder;
