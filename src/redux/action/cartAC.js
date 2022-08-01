import * as axios from "axios";

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

export const cartFetched=()=>(dispatch)=>{
    // dispatch (setLoading(true));
    axios.get("https://62cef37d486b6ce8265035e8.mockapi.io/cart")
    .then(response=> dispatch(setCartItems(response.data))
    )
}  

export const cartSending=(obj)=>(dispatch)=>{
    // dispatch (setLoading(true));
    axios.post("https://62cef37d486b6ce8265035e8.mockapi.io/cart", obj)
    .then(response=> dispatch(addItemsToCart(response.data))
    )
}
export const cartRemoving=(id)=>(dispatch)=>{
    // dispatch (setLoading(true));
    axios.delete(`https://62cef37d486b6ce8265035e8.mockapi.io/cart/${id}`)
    .then(response=> dispatch(deleteItemsToCart(id))
    )
}