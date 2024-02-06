

import { Link } from "react-router-dom";
import {useState} from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const [changeButton, setButton] = useState("Login");

 
  function handleButton () {
    changeButton === "Login" ? setButton("Logout") : setButton("Login")
  }

  //selector is a hook inside react 
  //hook is normal js function

  const cart = useSelector(store => store.cart.items);   
  //? we are subscribing the store using the selector

  console.log(cart)
  
  return (
    <div className="navbar">
      <Link to="/"><i class="icon fa-brands fa-cotton-bureau"></i></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li>Cart ({cart.length}) <i class="fa-solid fa-cart-shopping"></i></li>
        <button onClick={handleButton}>{changeButton}</button>
      </ul>
    </div>
  );
};
export default Navbar;
