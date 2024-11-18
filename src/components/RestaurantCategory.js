import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,SetShowIndex}) => {
 
    const handleClick = () => {
        // console.log("Clicked category, setting index:"); // Log category index
        //      setShowItems(!showItems)
        SetShowIndex();
      };
      
      console.log("showItems in category:", showItems); // Check showItems value
      
  return (
    <div className="Acco-body">
      <div className="Acco-header">
        <span className="Acco-title" onClick={handleClick}>
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Show items only if `showItems` is true */}
      {showItems && <ItemList items={data?.itemCards}  />}
    </div>
  );
};

export default RestaurantCategory;
