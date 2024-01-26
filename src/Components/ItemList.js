
import {cloudImg} from "../utils/constant"

const ItemList = ({listInfo}) => {

    console.log("---",listInfo)

    const {name, description,imageId, price, defaultPrice} = listInfo?.card?.info
    return (
        <div className="listing">
            <div className="infoX">
                <h4>{name}</h4>
                <p className="description">{description}</p>
                <p className="rupee">₹ {defaultPrice/100 || price / 100}/-</p>
            </div>
            <div className="imgX">
                <img src={cloudImg + imageId} alt="" />
                <button>ADD +</button>
            </div>
            <div>
            </div>
        </div>
    )
}



export default ItemList;