import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [ResInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchmenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&resId=${resId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log('Fetched ResInfo:', json); // Log the full response
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  useEffect(() => {
    fetchmenu();
  }, [resId]);

  if (ResInfo === null) return <Shimmer />;

  const restaurantName = ResInfo?.cards && ResInfo.cards.length > 2 
    ? ResInfo.cards[2].card.card.info.name || "Restaurant Name Not Found"
    : "Restaurant Name Not Available";

  const avgRating = ResInfo?.cards && ResInfo.cards.length > 2 
    ? ResInfo.cards[2].card.card.info.avgRatingString || "N/A"
    : "N/A";

  const costForTwo = ResInfo?.cards && ResInfo.cards.length > 2 
    ? ResInfo.cards[2].card.card.info.costForTwoMessage || "Cost information not available"
    : "Cost information not available";

  return (
    <div className="menuContainer">
      <h1 className="restaurantName">{restaurantName}</h1>
      <div className="menuTable">
        <h1 className="menuTable__avgRating">{avgRating}</h1>
        <h1 className="menuTable__cost">{costForTwo}</h1>
      </div>
      <h1>Recommended</h1>
      <ul className="menuList">
        {ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item, index) => (
            <li key={index} className="menuList__item">
              {item?.card?.info?.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
