import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShowProduct = ({ title, price, qty, id, image }) => {
  return (
    <>
      <div className="col-md-6">
        <img src={image} alt={title} height="100px" width="100px" />
      </div>
      <div className="col-md-6">
        <p className="">{title}</p>
        <p className=" fw-bold my-4">${id}</p>
        <p className=" fw-bold my-4">${price}</p>
        <p className=" fw-bold my-4">${qty}</p>
      </div>
    </>
  );
};

const ShowOrder = ({ firstname, lastname, email, products }) => {
  return (
    <>
      <div>
        <p className="display-6">Ordered By</p>
        <div>
          <span>{firstname}</span>
          <span>{lastname}</span>
        </div>
        <p>{email}</p>
      </div>
      {products.map((product) => {
        return <ShowProduct key={product.id} image={product.image} price={product.price} qty={product.qty} title={product.title} id={product.id} />;
      })}
      <hr/>
    </>
  );
};
const Loading = () => {
  return (
    <>
      <div className="col-md-6">
        <Skeleton height={100} width={100} />
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

const Order = () => {
 
  const [loading, setLoading] = useState(false);
  const [bullshit,setBullshit] = useState([])
  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:1337/api/order`);
      setBullshit(await response.json());
      setLoading(false);
    };
    getOrder();
  }, []);
  console.log(bullshit.length);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Order Successfull!!
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {
            loading || bullshit.length === 0 ? <Loading/>
            :(
              bullshit.map( ele =>{
                return <ShowOrder key={ele._id} email={ele.email} firstname={ele.firstname} lastname={ele.lastname}
                products={ele.products} />
              })
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Order;
