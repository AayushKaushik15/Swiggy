

import { Link } from "react-router-dom";
import {useState} from "react";

const Navbar = () => {

  const [changeButton, setButton] = useState("Login");

 
  function handleButton () {
    changeButton === "Login" ? setButton("Logout") : setButton("Login")
  }
  
  return (
    <div className="navbar">
      <Link to="/"><i class="icon fa-brands fa-cotton-bureau"></i></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li>Cart<i class="fa-solid fa-cart-shopping"></i></li>
        <button onClick={handleButton}>{changeButton}</button>
      </ul>
    </div>
  );
};
export default Navbar;
