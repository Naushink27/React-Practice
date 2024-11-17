import { Img_URL } from "./utils";

const ItemList = ({ item,showItem }) => {

  return (
    <div>
      {item?.map((item) => (
        <div className="item-head" key={item?.card?.info?.id}>
          <div>
            <div className="item-body">
              <span className="item-heading">{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="item-des">{item?.card?.info?.description}</p>
          </div>
          <div className="acc-end">
           
            <img
              src={Img_URL + item?.card?.info?.imageId}
              className="item-img"
              alt={item?.card?.info?.name} // Added alt attribute for accessibility
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
