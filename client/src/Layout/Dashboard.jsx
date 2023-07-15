import {
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hook/useCart";
import { GrFormAdd } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // todo

  const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-neutral drawer-button mt-5"
          >
            Show Menu
          </label>
          ,<br />
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-amber-300 text-base-content">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-item">
                    <GrFormAdd></GrFormAdd> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FiUser></FiUser>All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                    <span className="badge inl badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/shop">
                <FaShoppingBag></FaShoppingBag>
                Order More
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
