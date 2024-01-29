import { useState } from "react";
import ItemList, {highOrder} from "./ItemList"

const RecommendList = ({ dataOfList }) => {

  const { title, itemCards } = dataOfList?.card?.card;

  const [show, setShow] = useState(false);

  // console.log(">", itemCards);

  const clickHandler = () => {
    setShow(!show);
  };  

  const HighOrderFunction = highOrder(ItemList);

  return (
    <div className="recommendSections" onClick={clickHandler}>
      <div className="title-section">
        <h4>
          {title} ({itemCards.length})
        </h4>
        <i class="fa-solid fa-chevron-down"></i>
      </div>

      <div className="itemlist">
       { show && itemCards.map((value) => (

          value.card.info.isVeg ? <HighOrderFunction listInfo = {value}/> : 

          <ItemList listInfo={value} key = {value.card.info.id}/>
         
        ))}
      </div>
    </div>
  );
};




export default RecommendList;
