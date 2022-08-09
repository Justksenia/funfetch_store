import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";

import { itemsFetched, newItemsFetched } from "./redux/action/itemsAC";
import {
  cartFetched,
  cartRemoving,
  cartSending,
  setCartOpened,
} from "./redux/action/cartAC";
import {
  favoriteFetched,
  favoriteRemoving,
  favoriteSending,
} from "./redux/action/favoriteAC";

import {
  orderFetching,
  orderRegister,
  setLoading,
} from "./redux/action/orderAC";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./Components/Header/Header";
import Orders from "./pages/Orders";

import "./scss/App.scss";
function App() {
  const dispatch = useDispatch();
  const { items, loading, pageActive } = useSelector(
    (state) => state.itemReducer
  );
  const { cartDisplay, cartItems, totalPrice, discountPrice } = useSelector(
    (state) => state.cartReducer
  );
  const { favoriteItems } = useSelector((state) => state.favoriteReducer);
  const { isOrderComplete, orders } = useSelector(
    (state) => state.orderReducer
  );
  const [fetching, setFetching] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(2);

  React.useEffect(() => {
    if (fetching) {
        dispatch(newItemsFetched(pageCount)).then(setPageCount((prev) => prev + 1))
        .then (setFetching(false));
    }
  }, [fetching]);

  React.useEffect(() => {
    dispatch(itemsFetched(pageActive))
    dispatch(cartFetched());
    dispatch(favoriteFetched());
    dispatch(orderFetching());
   
    
  }, []);

  React.useEffect(()=> {
  document.addEventListener("scroll", handlerScroll);
    return function () {
      document.removeEventListener("scroll", handlerScroll);
}},[])

  const handlerScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };
  const onAddToCart = (obj) => {
    dispatch(cartSending(obj));
  };
  const onAddToFavorites = (obj) => {
    if (favoriteItems.find((item) => item.uniID === obj.uniID)) {
      dispatch(favoriteRemoving(Number(obj.id)));
    } else {
      dispatch(favoriteSending(obj));
    }
  };

  const onRemoveItem = (id) => {
    dispatch(cartRemoving(id));
  }; 
  const onRemoveFavorite=(id)=>{
    dispatch(favoriteRemoving(id))
  }
  const onRegisterOrder = async (obj) => {
    dispatch(orderRegister(obj));
    await obj.map((item) => dispatch(cartRemoving(item.id)));
  };

  const setCartDisplay = (value) => {
    dispatch(setCartOpened(value));
  };

  return (
    <div className="wrapper">
      <Header setCartDisplay={setCartDisplay} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              favoriteItems={favoriteItems}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              loading={loading}
              cartDisplay={cartDisplay}
              setCartDisplay={setCartDisplay}
              cartItems={cartItems}
              totalPrice={totalPrice}
              discountPrice={discountPrice}
              isOrderComplete={isOrderComplete}
              onRemoveItem={onRemoveItem}
              onRegisterOrder={onRegisterOrder}
              onRemoveFavorite={onRemoveFavorite}
            />
          }
        />
        <Route
          path="/favorite"
          element={<Favorites favoriteItems={favoriteItems}  onRemoveFavorite={onRemoveFavorite} />}
        />
        <Route path="/order" element={<Orders orders={orders} />} />
      </Routes>
    </div>
  );
}

export default App;
