import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "./useRestaurantmenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantmenu(resId);

  if (ResInfo === null) return <Shimmer />;

  // Update the path based on the actual structure
  const { name, cuisines, costForTwoMessage, avgRating } =
    ResInfo?.cards?.[2]?.card?.card?.info || {};

  // Adjust this path after checking the JSON structure
  const itemCards =
    ResInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  console.log("Item cards:", itemCards);

  if (itemCards) {
    itemCards.forEach((item) => {
      const itemName = item?.card?.info?.name;
      if (itemName) {
        console.log(itemName);
      }
    });
  } else {
    console.log("No item cards found");
  }

  return (
    <div className="menuContainer">
      <h1 className="restaurantName">{name}</h1>
      <div className="menuTable">
        <h1 className="menuTable__avgRating">{avgRating}</h1>
        <h1 className="menuTable__cost">{costForTwoMessage}</h1>
        <h1 className="menuTable__cuisines">{cuisines?.join(", ")}</h1>
      </div>
      <h1>Recommended</h1>
      <ul className="menuList">
        {itemCards?.map((item, index) => (
          <li key={index} className="menuList__item">
            {item?.card?.info?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
