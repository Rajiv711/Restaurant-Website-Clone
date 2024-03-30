import { CDN_URL } from "../utils/constants";



const RestaunrantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  const { deliveryTime } = sla;

  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};


export default RestaunrantCard;