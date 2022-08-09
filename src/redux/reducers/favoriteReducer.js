const initialState={
    favoriteItems:[],
    loading:true
}

 const favoriteReducer=(state=initialState, action)=> {
    switch(action.type) {
        case "SET_FAVORITE": 
            return {
                ...state,
                favoriteItems:action.payload,
                loading:false
            }
        case "ADD_TO_FAVORITE": {
            const newItems=[...state.favoriteItems, action.payload]
            return {
                ...state,
                favoriteItems:newItems
            }
        }
        case "DELETE_TO_FAVORITE": {
             const newItems=state.favoriteItems.filter(item=>item.uniID!==action.payload.uniID)
            return {
                ...state,
                favoriteItems:newItems
            }
        }
        default: 
        return state
    }
 }

export default favoriteReducer;
