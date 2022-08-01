import React from "react";
import * as axios from "axios";
import ShoppingCart from "../Components/ShoppingCart";
import Card from "../Components/Card";
import { itemsFetched} from "../redux/action/itemsAC";
import { cartFetched, cartRemoving, cartSending, setCartOpened } from "../redux/action/cartAC";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { favoriteFetched, favoriteRemoving, favoriteSending } from "../redux/action/favoriteAC";
import Slider from "../Components/Slider";
import Preloader from "../Components/Preloader/Preloader";


const Home =()=>{
    const dispatch=useDispatch();
    const {items, loading}=useSelector(state=>state.itemReducer);
    const {cartDisplay, cartItems}=useSelector(state=>state.cartReducer)
    const favorites=useSelector(state=>state.favoriteReducer.favoriteItems)
    
    const [search, setSearch]=React.useState("")


  
    React.useEffect(()=>{
        dispatch(itemsFetched())  
        dispatch(cartFetched())
        dispatch(favoriteFetched())
    },[])

    // React.useEffect(()=>{
    //     async function fetchData() {
    //         // setLoading(true);
    //         const itemsResponse=await axios.get("https://62cef37d486b6ce8265035e8.mockapi.io/items")
    //         const cartRespons= await axios.get("https://62cef37d486b6ce8265035e8.mockapi.io/cart")
    //         const favoriteResponse=await axios.get("https://62cef37d486b6ce8265035e8.mockapi.io/favorites")
    //         // setLoading(false)
    //         setItems(itemsResponse.data)
    //         setCartItems(cartRespons.data)
    //         setFavorites(favoriteResponse.data)

    //     } fetchData()   
    // }, [])

    const onAddToCart=(obj)=>{
        dispatch(cartSending(obj))
    
    }
    const onAddToFavorites=(obj)=>{
        if (favorites.find(item=>item.uniID===obj.uniID)) {
            dispatch(favoriteRemoving(Number(obj.id)))
        }
        else {
            dispatch(favoriteSending(obj))
        }
     
    }

    const onChangeInput=(e)=>setSearch(e.target.value)
    const onRemoveItem=(id)=>{
        dispatch(cartRemoving(id))
    }
    const itemsCards=items.filter(item=>item.title.toLowerCase().trim().includes(search.toLowerCase())).map(item=><Card {...item} onPlus={()=>onAddToCart(item)} onFavorite={()=>onAddToFavorites(item)} onLoading={loading}/>)

    return (
        <>
        {cartDisplay && (
          <ShoppingCart
            items={cartItems}
            onRemoveItem={onRemoveItem}
            cartClouser={() => dispatch(setCartOpened(false))}
          />
        )}

        <div className="content">
        <Slider/>
          <div className="search-content">
            <h1>
              {search
                ? `Поиск по запросу: "${search}"`
                : "Все кроссовки"}
            </h1>
            <div className="search-block">
              <img src="img/search.svg" alt="Search" />
              {search && (
                <img
                  onClick={() => setSearch("")}
                  className="clear"
                  src="img/close_button.svg"
                  alt="Clear"
                />
              )}
              <input
                onChange={onChangeInput}
                value={search}
                placeholder="Поиск..."
              />
            </div>
          </div>
     
          <div className="cards-block">
            {itemsCards }
            
          </div>
        </div>
      </>
    )
}
export default Home