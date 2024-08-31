import Home from "../../assets/SVGs/Home.jsx";
import tag from "../../assets/SVGs/tag.jsx";
import Heart from "../../assets/SVGs/heart.jsx";
import ShoppingBag from "../../assets/SVGs/ShoppingBag.jsx";
import Person from "../../assets/SVGs/Person.jsx";
import Logo from "../../assets/images/storeLogo1.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../../store/slices/CartSlice.jsx";
import Cart from "../../pages/Cart.jsx";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { logout } from "../../store/slices/auth/AuthSlice.jsx";

export default function Navbar() {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  // console.log(user.authUser);

  return (
    <>
      <div className="w-full h-12 bg-black text-white-100 text-center py-2 text-xl font-bold">
        Happy Shopping!
      </div>
      <div className="flex justify-between px-24 h-20	overflow-hidden">
        <div className="flex justify-between items-center cursor-pointer">
          <Link to="/" className="w-44 h-24">
            <img src={Logo} alt="logo" className="w-fit h-fit" />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex justify-between items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-300 py-2 px-6 rounded-xl flex gap-1"
                  : "flex gap-1"
              }
            >
              {Home}
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-300 py-2 px-6 rounded-xl flex gap-1"
                  : "flex gap-1"
              }
            >
              {tag}
              All Products
            </NavLink>
            <NavLink
              to="wish_list"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-300 py-2 px-6 rounded-xl flex gap-1"
                  : "flex gap-1"
              }
            >
              {Heart}
              Wish list
            </NavLink>
            <button
              onClick={() => dispatch(handleOpen())}
              className="flex items-center gap-1"
            >
              {totalAmount > 0 ? (
                <span className="text-lg bg-gray-300 px-3 py-px rounded-full">
                  {totalAmount}
                </span>
              ) : (
                ShoppingBag
              )}
              Shopping bag
            </button>
            {user.authUser ? (
              <Menu>
                <MenuHandler>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.image}
                      alt="User image"
                    />
                    <p>{user.name}</p>
                  </div>
                </MenuHandler>
                <MenuList className="bg-white-100 p-2">
                  <MenuItem
                    className="text-black font-bold"
                    onClick={() => dispatch(logout())}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link to="signin" className="flex gap-1">
                {Person}
                Sign in
              </Link>
            )}
          </ul>
        </div>
      </div>

      {<Cart />}
      <Outlet />
    </>
  );
}
