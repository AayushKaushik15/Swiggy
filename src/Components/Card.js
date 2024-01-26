
import { cloudImg } from "../utils/constant";


const Card = ({cardInfo}) => {
    const {name,cloudinaryImageId,avgRating,sla,cuisines,aggregatedDiscountInfoV3} = cardInfo?.info;

    const imageUrl = `${cloudImg}${cloudinaryImageId}`;
    return (
        <div className="card-container">
            <img src={imageUrl} alt="" />
            <div className="title">
                <h4>{name}</h4>
                <div className="toggle">
                    <i class="fa-solid fa-star"></i><span>{avgRating}</span> •
                    <span className="toggle-2">{sla?.slaString}</span>
                </div>
                <h5 className="cuisines">{cuisines.join(', ')}</h5>
                <span className="offer">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</span>
            </div>
        </div>
    )
}




export default Card;