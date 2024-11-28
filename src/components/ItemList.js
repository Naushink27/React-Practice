import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";
import { Img_URL } from "./utils";

const ItemList = ({ items}) => {
  const dispatch=useDispatch();
const handleAddItem=(item)=>{
  dispatch(addItem(item))
}
console.log("Item",items)
  return (
    <div>
      {items?.map((items) => (
        <div className="item-head" key={items?.card?.info?.id}>
          <div>
            <div className="item-body">
              <span className="item-heading">{items?.card?.info?.name}</span>
              <span>
                - ₹
                {items?.card?.info?.price
                  ? items?.card?.info?.price / 100
                  : items?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="item-des">{items?.card?.info?.description}</p>
          </div>
          <div className="acc-end">
           <button className="Add-btn" onClick={() => handleAddItem(items)}>Add+</button>
            <img
              src={Img_URL + items?.card?.info?.imageId}
              className="item-img"
              alt={items?.card?.info?.name} // Added alt attribute for accessibility
            />

          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
