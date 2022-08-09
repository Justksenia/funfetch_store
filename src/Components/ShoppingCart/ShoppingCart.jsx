import style from "./ShoppingCart.module.scss";

const ShoppingCart = ({
  items,
  onRemoveItem,
  cartClouser,
  orderRegister,
  isOrderComplete,
  loadingOrder,
  totalPrice,
  discountPrice,
}) => {
  return (
    <div className={style.overlay}>
      <div className={style.cart}>
        <div className={style.cartHeader}>
          <h3>Корзина заказов</h3>
          <div>
            <button onClick={cartClouser}>
              <img src="img/close_button.svg" alt="close" />
            </button>
          </div>
        </div>
        {items.length > 0 ? (
          <>
            <div className={style.cartBlock}>
              {items.map((item) => (
                <div className={style.cartItem} key={item.id}>
                  <div
                    className={style.cartBlockImg}
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  ></div>
                  <div className={style.cartInfo}>
                    <p>{item.brand}</p>
                    <p>{item.title}</p>
                    <b>{item.price} $</b>
                  </div>
                  <button>
                    <img
                      src="img/close_button.svg"
                      alt="close"
                      onClick={() => onRemoveItem(item.id)}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className={style.cartTotal}>
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>{totalPrice} $</b>
                </li>
                <li>
                  <span>Скидка 5%</span>
                  <div></div>
                  <b>{discountPrice} $</b>
                </li>
              </ul>
            </div>
            <button
              className="greenButton"
              onClick={() => orderRegister(items)}
            >
              Оформить заказ <img src="img/arrow_cart.svg" alt="arrow" />
            </button>
          </>
        ) : (
          <div className={style.cartBlock}>
            <Info
              title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
              description={
                isOrderComplete
                  ? "Ваш заказ скоро будет отправлен"
                  : "Добавьте что-нибудь в корзину"
              }
              image={"img/empty_cart.jpg"}
            />
          </div>
        )}{" "}
      </div>
    </div>
  );
};
export default ShoppingCart;

const Info = ({ image, title, description }) => {
  return (
    <div className={style.cartEmpty}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img width="120px" src={image} alt="Empty" />
    </div>
  );
};
