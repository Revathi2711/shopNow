import React, { useState, useEffect, useParams} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Order = () => {

  const { id } = useParams();
  const [product, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

 


  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:1337/api/order/${id}`);
      setOrder(await response.json());
      setLoading(false);
    };
    getOrder();
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

  const ShowOrder = () => {
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
          <h1 className="display-5">{product.title}</h1>
          <h1 className="display-6 fw-bold my-4">${product.price}</h1>
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
