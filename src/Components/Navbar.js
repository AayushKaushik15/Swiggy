

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/"><i class="icon fa-brands fa-cotton-bureau"></i></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li>Cart <i class="fa-solid fa-cart-shopping"></i></li>
        <button>Login</button>
      </ul>
    </div>
  );
};
export default Navbar;
