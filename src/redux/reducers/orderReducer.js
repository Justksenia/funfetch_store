const initialState={
    orders:[]
}

 const orderReducer=(state=initialState, action)=> {
    switch(action.type) {
        case "ADD_ORDER" :
            const newItems=[...state.orders, action.payload]
            return {
                ...state,
                orders:newItems
            }
      
           
        
            default: 
            return state
    }

}


export default orderReducer;