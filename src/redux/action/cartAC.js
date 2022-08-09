
import { serverAPI } from "../../api/api";

export const setCartOpened=(value)=>({
    type:"SET_CART_DISPLAY",
    payload:value
})

export const setCartItems=(items)=>({
    type: "SET_CART",
    payload: items
})

export const addItemsToCart=(items)=>({
    type:"ADD_TO_CART",
    payload:items
})

export const deleteItemsToCart=(id)=>({
    type:"DELETE_TO_CART",
    payload:id
})

export const clearCart=(obj)=>({
    type:"CLEAR_TO_CART",
    payload:obj
})

export const cartFetched=()=>(dispatch)=>{
    serverAPI.getData("cart")
    .then(response=> dispatch(setCartItems(response.data))
    )
}  

export const cartSending=(obj)=>(dispatch)=>{
     serverAPI.postData("cart",obj)
    .then(response=> dispatch(addItemsToCart(response.data))
    )
}
export const cartRemoving=(id)=>(dispatch)=>{
    serverAPI.deleteData("cart",id)
    .then(dispatch(deleteItemsToCart(id))
    )
}
