
import Card from "../Components/Card/Card";

const Favorites = ({favoriteItems,  onRemoveFavorite}) => {
  return (
    <div>
      <h2>Мое избранное</h2>
      <div className="list__item">
        {[...favoriteItems].map((item) => (
          <Card {...item} key={item.id} like={true} onRemoveFavorite={()=>onRemoveFavorite(item.id)}/>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
