import React, { useState, useEffect, useContext} from "react";
import { useDispatch } from "react-redux";
import { addCart} from "../redux/actions/index";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CartContext } from "../context/CartContext";
const Product = () => {
  const {dispatchCart,cart} = useContext(CartContext);
  console.log(cart)
  const { id } = useParams();
  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const addProduct = (product)=> {
    console.log(product)
    dispatchCart({type:'ADD_TO_CART',payload:product})
}
const removeFromCart = (product)=>{
  dispatchCart({type:'REMOVE_FROM_CART',payload:product.id})
}

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} s />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return ( 
      
      <>

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating{product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outlined-dark px-4 py-2"
          onClick={() => addProduct(product)}>
            Add to cart
          </button>
          {/* <button className="btn btn-outlined-dark px-4 py-2"
          onClick={() => removeFromCart(product)}>
            Remove from cart
          </button> */}
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
