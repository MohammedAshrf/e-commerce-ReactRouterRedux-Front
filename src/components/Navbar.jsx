import Logo from "../assets/images/logo.png";
import Heart from "../assets/SVGs/heart.jsx";
import ShoppingBag from "../assets/SVGs/ShoppingBag.jsx";
import Person from "../assets/SVGs/Person.jsx";
import { Link, Outlet } from "react-router-dom";
import Home from "../assets/SVGs/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../store/slices/CartSlice.jsx";
import Cart from "../pages/Cart.jsx";

export default function Navbar() {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.cart);
  console.log(totalAmount);

  return (
    <>
      <div className="w-full h-12 bg-black text-white-100 text-center py-2 text-xl font-bold">
        Happy Shopping!
      </div>
      <div className="flex justify-between px-24 h-20	overflow-hidden">
        <div className="flex justify-between items-center cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-28" />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex justify-between items-center gap-6">
            <Link to="/" className="flex gap-1 items-center">
              {Home}
              Home
            </Link>
            <Link to="wish_list" className="flex gap-1">
              {Heart}
              Wish list
            </Link>
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
            <Link to="signin" className="flex gap-1">
              {Person}
              Sign in
            </Link>
          </ul>
        </div>
      </div>

      {<Cart />}
      <Outlet />
    </>
  );
}
