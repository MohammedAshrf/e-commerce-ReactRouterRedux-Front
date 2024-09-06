import Home from "../../assets/SVGs/Home.jsx";
import tag from "../../assets/SVGs/tag.jsx";
import Heart from "../../assets/SVGs/Heart.jsx";
import ShoppingBag from "../../assets/SVGs/ShoppingBag.jsx";
import Person from "../../assets/SVGs/Person.jsx";
import Logo from "../../assets/images/storeLogo1.png";
import { Link, NavLink } from "react-router-dom";
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
import { clearWishList } from "../../store/slices/WishListSlice.jsx";
import BurgerIcon from "../../assets/SVGs/BurgerIcon.jsx";

export default function Navbar() {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div
        id="apoveNavbar"
        className={`w-full h-12 bg-black text-white-100 text-center py-${0} 
        text-xl font-bold`}
        style={{ height: 0 + "px" }}
      >
        Happy Shopping!
      </div>
      <div
        className="flex justify-between items-center px-16 sm:px-24 h-30 sm:h-22 overflow-hidden
          lg:flex-row sm:flex-col flex-col drop-shadow-lg"
      >
        <div
          className="flex items-center cursor-pointer
          justify-center sm:justify-center lg:justify-between"
        >
          <Link to="/" className="w-44 h-24">
            <img src={Logo} alt="logo" className="w-fit h-fit" />
          </Link>
        </div>
        <Menu>
          <MenuHandler>
            <div
              className={`cursor-pointer border-2 border-black rounded-md 
              py-1 px-16 block sm:hidden`}
            >
              {BurgerIcon}
            </div>
          </MenuHandler>
          <MenuList
            className={`flex flex-col items-center gap-2 bg-white-100 p-2`}
          >
            <MenuItem className="text-black font-bold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-300 py-2 px-6 rounded-xl flex gap-1"
                    : "py-2 px-6 flex gap-1"
                }
              >
                {Home}
                Home
              </NavLink>
            </MenuItem>
            <MenuItem className="text-black font-bold">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-300 py-2 px-6 rounded-xl flex gap-1"
                    : "py-2 px-6 flex gap-1"
                }
              >
                {tag}
                All Products
              </NavLink>
            </MenuItem>
            <MenuItem className="text-black font-bold">
              <NavLink
                to="wish_list"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-300 py-2 px-6 rounded-xl flex gap-1"
                    : "py-2 px-6 flex gap-1"
                }
              >
                {Heart}
                Wish list
              </NavLink>
            </MenuItem>
            <MenuItem className="text-black font-bold">
              <div
                onClick={() => dispatch(handleOpen())}
                className="flex items-center gap-1 py-1 px-4"
              >
                {totalAmount > 0 ? (
                  <span className="text-lg bg-gray-300 px-3 py-px rounded-full">
                    {totalAmount}
                  </span>
                ) : (
                  ShoppingBag
                )}
                Shopping bag
              </div>
            </MenuItem>
            <MenuItem className="text-black font-bold">
              {user.authUser ? (
                <Menu>
                  <MenuHandler>
                    <div className="flex items-center gap-3 py-1 px-4 cursor-pointer">
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
                      onClick={() => {
                        dispatch(logout());
                        dispatch(clearWishList());
                      }}
                    >
                      Log out
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Link to="signin" className="flex justify-center gap-1 py-2">
                  {Person}
                  Sign in
                </Link>
              )}
            </MenuItem>
          </MenuList>
        </Menu>
        <div className={`hidden sm:flex justify-between items-center`}>
          <ul
            className={`flex items-center gap-4 lg:gap-2 flex-wrap justify-center 
             mb-0 sm:mb-2 lg:mb-0`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-300 hover:bg-gray-200 py-2 px-2 rounded-xl flex gap-1"
                  : "hover:bg-gray-200 py-2 px-2 rounded-xl flex gap-1"
              }
            >
              {Home}
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-300 hover:bg-gray-200 py-2 px-2 rounded-xl flex gap-1"
                  : "hover:bg-gray-200 py-2 px-2 rounded-xl flex gap-1"
              }
            >
              {tag}
              All Products
            </NavLink>
            <NavLink
              to="wish_list"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-300 hover:bg-gray-200 py-2 px-2 rounded-xl flex gap-1"
                  : "hover:bg-gray-200 py-2 px-2 rounded-xl flex gap-1"
              }
            >
              {Heart}
              Wish list
            </NavLink>
            <button
              onClick={() => dispatch(handleOpen())}
              className="flex items-center gap-1 hover:bg-gray-200 py-2 px-2 rounded-xl"
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
                  <div
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-200
                        py-2 px-4 rounded-xl"
                  >
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
                    onClick={() => {
                      dispatch(logout());
                      dispatch(clearWishList());
                    }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link
                to="signin"
                className="flex gap-1 hover:bg-gray-200
                py-2 px-2 rounded-xl"
              >
                {Person}
                Sign in
              </Link>
            )}
          </ul>
        </div>
      </div>

      {<Cart />}
    </>
  );
}
