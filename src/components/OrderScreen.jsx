import React, { useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";


const Order = () => {

  const { _id } = useParams();
  const [product, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

 


  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:1337/api/order/${_id}`);
      setOrder(await response.json());
      setLoading(false);
    };
    getOrder();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={100}  width={100}/>
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={50} width={300} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} />
          
        </div>
      </>
    );
  };

  const ShowOrder = () => {
    return ( 
      
      <>

        <div className="col-md-6" >
          <img
            src={product.image}
            alt={product.title}
            height="100px"
            width="100px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{product.title}</h1>
          <h1 className="display-6 fw-bold my-4">${product._id}</h1>
          <h1 className="display-6 fw-bold my-4">${product.price}</h1>
          <h1 className="display-6 fw-bold my-4">${product.qty}</h1>

        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Order Successfull!!</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowOrder />}
        </div>
      </div>
    </div>
  );
};

export default Order;
