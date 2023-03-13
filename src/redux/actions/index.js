//to add item to cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

//to delete item from cart
export const deleteCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}