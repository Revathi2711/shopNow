import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import PlaceOrder from "./components/PlaceOrder";
import { CartContextState } from "./context/CartContext";
import OrderScreen from "./components/OrderScreen";
import Cart from "./components/Cart";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <CartContextState>
        <Outlet />
      </CartContextState>
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
 {
        path: "/Cart",
        element: <Cart />,
      },

      {
        path: "/PlaceOrder",
        element: <PlaceOrder />,
      },
      {
        path: "/OrderScreen",
        element: <OrderScreen />,
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
