import * as axios from "axios";

export const addOrderToRegister=(items)=>({
    type:"ADD_ORDER",
    payload:items
})

export const orderRegister=(obj)=>(dispatch)=>{
    // dispatch (setLoading(true));
    axios.post("https://62cef37d486b6ce8265035e8.mockapi.io/orders", obj)
    .then(response=> dispatch(addOrderToRegister(response.data))
    )
}