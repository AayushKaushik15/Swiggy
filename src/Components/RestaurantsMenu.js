import { useParams } from "react-router-dom";
import menuList from "../utils/menuList";
import Shimmer from "./Shimmer";
import RecommendList from "./RecommendList";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const menu = menuList(resId);

  if (!menu) return <Shimmer />;

  const {
    name,
    areaName,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    sla,
    feeDetails,
  } = menu?.data?.cards[0]?.card?.card?.info;


  const recommendSection = menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  const filterRecommendSection = recommendSection.filter(value => value?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 
  console.log(filterRecommendSection)

  return (
    <div className="main-menu">
      <div className="restaurant-menu">
        <div className="box-1-menu">
          <h1>{name}</h1>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <span>{areaName}</span> - <span>{sla.lastMileTravelString}</span>
          {/* <p>{costForTwoMessage}</p> */}
        </div>
        <dir className="box-2-menu">
          <i class="fa-solid fa-star"></i>
          <span>{avgRating}</span>
        </dir>
      </div>
      <div className="last-box">
      <i class="fa-solid fa-bicycle"></i> <span>{feeDetails.message}</span>
      </div>
      <div className="timing">
        <div className="time-1">
            <span>{costForTwoMessage}</span>
        </div>
        <div className="time-2">
            <i class="fa-regular fa-clock"></i>
            <span>{sla.slaString}</span>
        </div>
        
      </div>
      
      <div className="listingRecommendSection">
        {
            filterRecommendSection.map((value, index) => (
                <RecommendList dataOfList = {value} key = {index}/>
            ))
        }
      </div>

    </div>
  );
};

export default RestaurantsMenu;
