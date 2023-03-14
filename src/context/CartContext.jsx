import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((product) => {
        return product.id !== action.payload;
      });
    case "ADD_QTY":

      return state.map((product) => {
        return product["id"] === action.payload.id
          ? { ...product, qty: action.payload.qty+1 }
          : product;
      });
      case 'REDUCE_QTY':
        return state.map(product =>{
            return product['id'] === action.payload.id?{
                ...product,qty:action.payload.qty -1
            }:product
        })
      case 'EMPTY':
        return state = [];
      default:
        return state;
  }
};
export const CartContextState = ({ children }) => {
  let initialCart = [];
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
