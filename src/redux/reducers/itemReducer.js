const initialState = {
  items: [],
  loading: true,
  pageActive: 1,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_PAGE":
      return {
        ...state,
        pageActive: action.payload,
      };
    case "SET_NEW_ITEMS":
      const newItem = [...state.items.concat(action.payload)];
      return {
        ...state,
        loading: false,
        items: newItem,
      };

    default:
      return state;
  }
};

export default itemReducer;
