

const initialState={
    cartDisplay:false,
    cartItems:[]
}

 const cartReducer=(state=initialState, action)=> {
    switch(action.type) {
        case "SET_CART_DISPLAY":
            return {
                ...state,
                cartDisplay:action.payload
            }
        case "SET_CART": 
            return {
                ...state,
                cartItems:action.payload
            }
        case "ADD_TO_CART": {
            const newCartItems=[...state.cartItems, action.payload]
            return {
                ...state,
                cartItems:newCartItems
            }
        }
        case "DELETE_TO_CART": {
            const newCartItems=state.cartItems.filter(item=>item.id!==action.payload)
            return {
                ...state,
                cartItems:newCartItems
            }
        }
            
        
            default: 
            return state
    }

}

export default cartReducer