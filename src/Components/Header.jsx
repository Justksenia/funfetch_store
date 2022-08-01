import {Link} from "react-router-dom";
import "./Header.scss";
import { setCartOpened } from "../redux/action/cartAC";
import { useDispatch} from "react-redux/es/exports";



const Header=()=>{
    const dispatch=useDispatch();

    return (
        <header>
            <div className="header-left">
                <h1>FUNFETCH</h1>
                <p>fashion bags boutique</p>
            </div>
            <div className="header-right">
                <ul>
                    <li onClick={()=>dispatch(setCartOpened(true))}> <img width={18} height={18} src="img/cart.svg" alt="ShoppingCart" /></li>
                    <li><Link to="/favorite"><img width={18} height={18} src="img/like.svg" alt="Favorites" /></Link></li>
                    <li><img width={18} height={18} src="img/profile.svg" alt="Profile" /></li> 
                </ul>
            </div>
        </header>
    )
}
export default Header;
