
import { serverAPI } from "../../api/api";

export const setFavoriteItems=(items)=>({
    type: "SET_FAVORITE",
    payload: items
})

export const addItemsToFavorite=(items)=>({
    type:"ADD_TO_FAVORITE",
    payload:items
})

export const deleteItemsToFavorite=(id)=>({
    type:"DELETE_TO_FAVORITE",
    payload:id
})

export const favoriteFetched=()=>(dispatch)=>{
    serverAPI.getData("favorites").then(response=> dispatch(setFavoriteItems(response.data))
    )
}  

export const favoriteSending=(obj)=>(dispatch)=>{
    serverAPI.postData("favorites",obj).then(response=> dispatch(addItemsToFavorite(response.data))
    )
}
export const favoriteRemoving=(id)=>(dispatch)=>{
    serverAPI.deleteData("favorites",id).then(dispatch(deleteItemsToFavorite(id))
    )
}