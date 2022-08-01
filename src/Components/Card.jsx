import React from "react";
import "./Card.scss";
import Preloader from "./Preloader/Preloader";

const Card=({title, price, imgUrl, onPlus, onFavorite, brand, onLoading})=>{
    const [isAdded, setIsAdded]=React.useState(false);
    const [isLike, setIsLike]=React.useState(false);

    const onClickPlus=()=>{
        setIsAdded(true)
        onPlus()
    }
    const onClickLike=()=>{
        setIsLike(true)
        onFavorite()
    }
    return (
        <article>
        <div className="card-block">
            {onLoading? <Preloader/>:
            <>
        <div className="card-block__favorite" onClick={onClickLike}><img src={isLike?"img/add_favorite.svg":"img/no_add_favorite.svg"}/> </div>
        <div className="card-block__img" style={{ backgroundImage: `url(${imgUrl})` }}> </div>

        <h2>{brand}</h2>
        <p>{title}</p>
        <div className="card-block__price"> 
            <div className="card-block__total">
            <span>Цена:</span>
              <b>{price} руб.</b>
        </div>
        <div><button onClick={onClickPlus}><img src={isAdded?"img/add_cart.svg":"img/no_add_cart.svg"}/></button></div>
    </div>
    </> }
    </div>
    </article>
    )
}
export default Card;