
import { serverAPI } from "../../api/api";

export const setOrder=(items)=>({
    type:"SET_ORDER",
    payload:items
})

export const addOrderToRegister=(items)=>({
    type:"ADD_ORDER",
    payload:items
})

export const onOrderNumber=(id)=>({
    type:"ON_ORDER_NUMBER",
    payload:id
})
export const isOrder=(value)=>({
    type:"ORDER_COMPL",
    payload: value
})


export const orderFetching=()=>(dispatch)=>{
    serverAPI.getData("orders").then(response=> dispatch(setOrder(response.data))
    )
}

export const orderRegister=(obj)=>(dispatch)=>{
    dispatch (isOrder(true));
    serverAPI.postData("orders", obj)
    .then(response=> {
        dispatch(addOrderToRegister(response.data))
        dispatch(onOrderNumber(response.data.id))
    }
    )

}
