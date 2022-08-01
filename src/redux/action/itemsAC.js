import * as axios from "axios";

export const setItems=(item)=>({
    type: "SET_ITEMS",
    payload:item
})

export const setLoading=(value)=>({
    type:"SET_LOADING",
    payload:value
})



export const itemsFetched=()=>(dispatch)=>{
    dispatch (setLoading(true));
    axios.get("https://62cef37d486b6ce8265035e8.mockapi.io/items")
    .then(response=> dispatch(setItems(response.data))
    )
}  
