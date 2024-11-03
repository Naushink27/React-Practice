import { useState, useEffect } from "react";

const useRestaurantmenu = (resId) => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }
        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]); // Added resId as a dependency

  return ResInfo;
};

export default useRestaurantmenu;
