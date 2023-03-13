import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state,action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter( product => {
                return product.id !== action.payload
            })
    }
}
export const CartContextState = ({ children }) => {

  let initialCart = [];
  const [cart,dispatchCart] = useReducer(cartReducer,initialCart  )
  return <CartContext.Provider value={{cart,dispatchCart}}>{children}</CartContext.Provider>;
};
