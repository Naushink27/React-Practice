import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "./useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantmenu(resId);
  const [showIndex, setShowIndex] = useState(null); // Initial state as null to indicate no section is expanded

  if (ResInfo === null) return <Shimmer />;

  // Extract restaurant info
  const { name, cuisines, costForTwoMessage, avgRating } =
    ResInfo?.cards?.[2]?.card?.card?.info || {};

  // Extract item cards and categories
  const itemCards =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menuContainer">
      <h1 className="restaurantName">{name}</h1>
      <div className="menuTable">
        <h1 className="menuTable__avgRating">{avgRating}</h1>
        <h1 className="menuTable__cost">{costForTwoMessage}</h1>
        <h1 className="menuTable__cuisines">{cuisines?.join(", ")}</h1>
      </div>

      {/* Render RestaurantCategory for each category */}
      {categories.map((category, index) => (
      <RestaurantCategory
      key={category?.card?.card.title}
      data={category?.card?.card}
      showItems={index === showIndex}  // Show items only for the selected index
      setShowIndex={setShowIndex}  // Pass the setShowIndex function down
      index={index}  // Pass the index to the RestaurantCategory component
    />
      ))}
    </div>
  );
};

export default RestaurantMenu;
