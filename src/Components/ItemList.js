
import { useDispatch } from "react-redux"
import {cloudImg} from "../utils/constant"

import { addItems } from "../utils/cartSlice";

const ItemList = ({listInfo}) => {

    const dispatch = useDispatch();

    const {name, description,imageId, price, defaultPrice} = listInfo?.card?.info || {};

    const  handler = (listInfo) =>  {
        //dispatch an action;
        dispatch(addItems(listInfo));
    }  

    return (
        <div className="listing">
            <div className="infoX">
                <h4>{name}</h4>
                <p className="description">{description}</p>
                <p className="rupee">₹ {defaultPrice/100 || price / 100}/-</p>
            </div>
            <div className="imgX">
                <img src={cloudImg + imageId} alt="" />
                <button onClick={() => handler(listInfo)}>ADD +</button>
            </div>
            <div>
            </div>
        </div>
    )
}


//high order function --> high order function are the pure function 
// which takes components and modified that component


export function highOrder (ItemList) {
    return (props) => {
        return (
            <div>
                <h3 className="veg">VEG</h3>
                <ItemList {...props}/>
            </div>
        )
    }
}


export default ItemList;