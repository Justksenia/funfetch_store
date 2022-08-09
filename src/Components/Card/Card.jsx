import React from "react";

import Preloader from "../Preloader/Preloader";

import style from "./Card.module.scss";

const Card = ({
  title,
  id,
  price,
  imgUrl,
  onPlus,
  onFavorite,
  brand,
  onLoading,
  onRemoveFavorite, 
  like

}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(true);
    onPlus();
  };
  const onClickLike = () => {
    setIsLike(true);
    onFavorite();
  };
  const onClickDislike = (id) => {
    setIsLike(false);
    onRemoveFavorite(id);
  };
 

  return (
    <article>
      <div className={style.cardBlock}>
        {onLoading ? (
          <Preloader />
        ) : (
          <>
            <div className={style.cardFavorite} onClick={isLike || like ? ()=>onClickDislike(id):()=>onClickLike()}>
              <img
                src={
                  isLike || like ? "img/add_favorite.svg" : "img/no_add_favorite.svg"
                }
              />{" "}
            </div>
            <div
              className={style.cardImage}
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
              {" "}
            </div>

            <h3>{brand}</h3>
            <h4>{title}</h4>
            <div className={style.cardPrice}>
              <div className={style.cardTotal}>
                <span>Цена:</span>
                <b>{price} $</b>
              </div>
              <button onClick={onClickPlus}>
                <img
                  src={isAdded ? "img/add_cart.svg" : "img/no_add_cart.svg"}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};
export default Card;
