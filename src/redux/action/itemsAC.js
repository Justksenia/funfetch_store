import { serverAPI } from "../../api/api";

export const setItems=(item)=>({
    type: "SET_ITEMS",
    payload:item
})

export const setLoading=()=>({
    type:"SET_LOADING",
})

export const setPage=(num)=>({
    type:"SET_PAGE",
    payload:num
    
})

export const setNewItems=(items)=>({
    type: "SET_NEW_ITEMS",
    payload:items
})

export const itemsFetched=(num)=>(dispatch)=>{
    // dispatch (setLoading())
    // dispatch(setPage(num))
    return serverAPI.getItems(num).then(response=> dispatch(setItems(response.data)))
       
}  

export const newItemsFetched=(num)=>(dispatch)=>{
    // dispatch (setLoading())
    // dispatch(setPage(num+1))
    return serverAPI.getItems(num).then(response=>dispatch(setNewItems(response.data)))
}