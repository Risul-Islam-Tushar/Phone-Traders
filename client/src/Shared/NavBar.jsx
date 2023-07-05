import { Link } from "react-router-dom";
import img from "../assets/logo.jpeg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hook/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        err.message;
      });
  };

  const navOptions = (
    <>
      <li className="text-white font-bold ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white font-bold ">
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="flex justify-around items-center">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-accent">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <img className=" h-12 w-24 rounded-lg " src={img} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-neutral-700 text-white w-20">
            {user ? (
              <>
                <button onClick={handleLogOut} className="btn btn-ghost">
                  LogOut
                </button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
