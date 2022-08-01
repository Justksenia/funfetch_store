import * as axios from "axios";

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
    // dispatch (setLoading(true));
    axios.get("https://62cef37d486b6ce8265035e8.mockapi.io/favorites")
    .then(response=> dispatch(setFavoriteItems(response.data))
    )
}  

export const favoriteSending=(obj)=>(dispatch)=>{
    // dispatch (setLoading(true));
    axios.post("https://62cef37d486b6ce8265035e8.mockapi.io/favorites", obj)
    .then(response=> dispatch(addItemsToFavorite(response.data))
    )
}
export const favoriteRemoving=(id)=>(dispatch)=>{
    // dispatch (setLoading(true));
    axios.delete(`https://62cef37d486b6ce8265035e8.mockapi.io/favorites/${id}`)
    .then(dispatch(deleteItemsToFavorite(id))
    )
}