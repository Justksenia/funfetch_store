import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducers/itemReducer";
import cartReducer from "./reducers/cartReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import orderReducer from "./reducers/orderReducer";

export const store=configureStore({
    reducer:{itemReducer, cartReducer, favoriteReducer, orderReducer},
    devTools:process.env.NODE_ENV!=="production"
})