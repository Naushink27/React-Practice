import { Img_URL } from "./utils";

const RestrauntCard = (props) => {
  const { resData } = props;

  // Check if resData and resData.info exist before destructuring
  if (!resData?.info) {
    return null; // Don't render the card if the data is not available yet
  }

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData.info;

  return (
    <div className="CardContainer">
      <div className="card1">
        <h2>{name}</h2>

        <img className="resImg" src={Img_URL + cloudinaryImageId} alt={name} />

        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>

        {/* Check if sla and deliveryTime exist */}
        {sla?.deliveryTime && <h4>{sla.deliveryTime} min</h4>}

        {/* Join cuisines array safely */}
        {cuisines && <h5>{cuisines.join(", ")}</h5>}
      </div>
    </div>
  );
};

export default RestrauntCard;