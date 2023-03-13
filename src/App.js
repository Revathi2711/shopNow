import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";


const Layout = () => {
  return (
    <div>
       <Navbar />
       <Outlet/>
    </div>
    );
  };

const router = createBrowserRouter([
{
  path: "/",
    element: <Layout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Products/:id",
        element: <Product/>,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/PlaceOrder",
        element: <PlaceOrder/>,
      },
    ],
  },
    ]);


    

const App = () => {
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
};

export default App;
