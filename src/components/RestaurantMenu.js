import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [ResInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchmenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=23846" +
          resId 
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  useEffect(() => {
    fetchmenu();
  }, [resId]); // Add resId as a dependency

  if (ResInfo === null) return <Shimmer />;

  return (
    <div className="menuContainer">
      <h1 className="restaurantName">{ResInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <div className="menuTable">
        <h1 className="menuTable__avgRating">{ResInfo?.data?.cards[2]?.card?.card?.info?.avgRatingString}</h1>
        <h1 className="menuTable__cost">{ResInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
      </div>
      <h1>Recommended</h1>
      <ul className="menuList">
        {ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
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
