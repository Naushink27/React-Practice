import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pL?page-type=REGULAR_MENU&COMPLETE-MENU=TRUE&lat=12.9351929&lng=77.62448869999999&restaurantId=425&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Using optional chaining to safely access deeply nested properties
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;

console.log(resInfo?.cards[4]?.groupedCard?.cardGrouMap?.REGULAR?.cards[2]?.card?.card?.itemCard) 
// Destructure properties if `restaurantInfo` exists
  const { name, costForTwoMessage, cuisines } = restaurantInfo || {};

  // If `resInfo` is still null, display the Shimmer component (loading state)
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="Menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h3>{cuisines?.join(", ") || "Cuisines not available"}</h3>
      <h5>{costForTwoMessage || "Cost information not available"}</h5>
    </div>
  );
};

export default RestaurantMenu;
