const initialState={
    items:[],
    loading:true, 
}

 const cardReducer=(state=initialState, action)=> {
    switch(action.type) {
        case "SET_ITEMS" :
            return {
                ...state,
                items:action.payload,
                loading:false
            }
      
           
        
            default: 
            return state
    }

}


export default cardReducer;