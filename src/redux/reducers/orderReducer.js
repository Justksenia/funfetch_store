const initialState = {
  orders: [],
  numberOrder: 0,
  isOrderComplete: false,
  loadingOrder: true,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      const newItems = [...state.orders, action.payload];
      return {
        ...state,
        orders: newItems,
        isOrderComplete: false,
      };
    case "SET_ORDER":
      return {
        ...state,
        orders: action.payload,
      };
    case "ORDER_COMPL":
      return {
        ...state,
        isOrderComplete: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
