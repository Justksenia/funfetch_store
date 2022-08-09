import React from "react";

import Card from "../Components/Card/Card";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import Slider from "../Components/Slider/Slider";

const Home = ({
  items,
  favoriteItems,
  onAddToCart,
  onAddToFavorites,
  loading,
  cartDisplay,
  setCartDisplay,
  cartItems,
  totalPrice,
  discountPrice,
  isOrderComplete,
  onRemoveItem,
  onRegisterOrder,
  onRemoveFavorite
}) => {
  const [search, setSearch] = React.useState("");

  const onChangeInput = (e) => setSearch(e.target.value);

  const itemsCards = items
    .filter((item) =>
      item.brand.toLowerCase().trim().includes(search.toLowerCase())
    )
    .map((item) => (
      <Card
        {...item}
        key={item.id}
        favoriteItems={favoriteItems}
        onPlus={() => onAddToCart(item)}
        onFavorite={() => onAddToFavorites(item)}
        onLoading={loading}
        onRemoveFavorite={onRemoveFavorite}
      />
    ));

  return (
    <>
      {cartDisplay && (
        <ShoppingCart
          items={cartItems}
          onRemoveItem={onRemoveItem}
          orderRegister={onRegisterOrder}
          cartClouser={() => setCartDisplay(false)}
          isOrderComplete={isOrderComplete}
          discountPrice={discountPrice}
          totalPrice={totalPrice}
        />
      )}

      <main>
        <Slider />
        <div className="search-content">
          <h2>{search ? `Поиск по запросу: "${search}"` : "Все сумки"}</h2>
          <div className="search-block">
            {search && (
              <img
                onClick={() => setSearch("")}
                className="search-block-clear"
                src="img/close_button.svg"
                alt="Clear"
              />
            )}
            <input
              style={{ backgroundImage: `url(img/search.svg)` }}
              onChange={onChangeInput}
              value={search}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <section>
         <div className="cards-block">{itemsCards}</div>
        </section>
      </main>
    </>
  );
};
export default Home;
