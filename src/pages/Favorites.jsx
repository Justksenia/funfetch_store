
import Card from "../Components/Card/Card";

const Favorites = ({favoriteItems,  onRemoveFavorite}) => {
  return (
    <div>
      <h2>Мое избранное</h2>
     
      
      
      <div className="list__item">
      {favoriteItems.length<1?<h3 >Добавьте что-нибудь в избранное</h3>
      : 
        [...favoriteItems].map((item) => (
          <Card {...item} key={item.id} like={true} onRemoveFavorite={()=>onRemoveFavorite(item.id)}/>
        ))}
      </div> 
    </div>
  );
};

export default Favorites;
