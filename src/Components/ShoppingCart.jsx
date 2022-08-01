import "./ShoppingCart.scss";

const ShoppingCart=({items, onRemoveItem, cartClouser})=>{


    return (
        <div className="overlay">
            <div className="drawer">
                <div className="drawer__header">
                <h3>Корзина заказов</h3>
                <div><button className="drawer__button-close" onClick={cartClouser}>
                    <img src="img/close_button.svg" alt="close"/>
                </button>
                </div>
                </div>
                
                <div className="drawer__block" >
                
                        {items.map(item=>(
                            <div className="drawer__item">
                            <div className="drawer__block-img" style={{ backgroundImage: `url(${item.imgUrl})` }}>                        
                            </div>    
                            <div className="drawer__block-info">                                    
                                <h2>{item.brand}</h2>
                                <p>{item.title}</p>
                                <b>{item.price} $</b>
                            </div>  
                            <div>
                                <img src="img/close_button.svg" alt="close" onClick={()=>onRemoveItem(item.id)}/>  
                            </div>
                            </div>
                        ))}
                        
                        </div>
                        
                    <div className="drawer__block-total">
                        <ul>
                            <li>
                                <span>Итого</span>
                                <div></div>
                                <b>21111$</b>
                            </li>
                            <li>
                                <span>Скидка 5%</span>
                                <div></div>
                                <b>21111$</b>
                            </li>
                        </ul>
                    </div>
                    <button className="greenButton">Оформить заказ <img src="img/arrow_cart.svg" alt="arrow"/></button>
                </div>
            </div>
        // </div>
    )
}
export default ShoppingCart;