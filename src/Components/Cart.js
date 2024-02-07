import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log("asd", cartItems)

    const dis = useDispatch();

    const clickHandler = () => {
        dis(clearCart())
    }


    return (
        <div className="cart-container">
            <div>
                <h1>Cart <i class="fa-solid fa-cart-shopping"></i></h1>
                <button className="cartBtn" onClick={clickHandler}>Clear Cart</button>
            </div>
            <div>
                {cartItems.map((item) => (
                    <ItemList key={item.id} listInfo={item} />
                ))}
            </div>

                    {
                        cartItems.length === 0 && <h1>empty</h1>
                    }

        </div>
    )
}

export default Cart;