

const initialState={
    cartDisplay:false,
    cartItems:[],
    totalPrice:0,
    discountPrice:0

}

 const cartReducer=(state=initialState, action)=> {
    switch(action.type) {
        case "SET_CART_DISPLAY":
            return {
                ...state,
                cartDisplay:action.payload
            }
        case "SET_CART":{ 
           let price=state.cartItems.reduce((acc,item)=>acc+=Number(item.price), 0)
           let discount=Math.floor(price*0.95)
            return {
                ...state,
                cartItems:action.payload,
                totalPrice:price,
                discountPrice:discount
            }
        }
        case "ADD_TO_CART": {
            const newCartItems=[...state.cartItems, action.payload]
            let price=newCartItems.reduce((acc,item)=>acc+=Number(item.price), 0)
            let discount=Math.floor(price*0.95)
            return {
                ...state,
                cartItems:newCartItems,
                totalPrice:price,
                discountPrice:discount
            }
        }
        case "DELETE_TO_CART": {
            const newCartItems=state.cartItems.filter(item=>item.id!==action.payload)
            let price=newCartItems.reduce((acc,item)=>acc+=Number(item.price), 0)
            let discount=Math.floor(price*0.95)
            return {
                ...state,
                cartItems:newCartItems,
                totalPrice:price,
                discountPrice:discount
            }
        }
     
        
            default: 
            return state
    }

}

export default cartReducer