/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { toWishList } from "../../store/slices/WishListSlice";
import { useDispatch, useSelector } from "react-redux";
import Heart from "../../assets/SVGs/Heart";
import { Tooltip } from "@material-tailwind/react";

export default function ProductCard({
  id,
  category,
  img,
  name,
  text,
  price,
  color,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { wishListData } = useSelector((state) => state.wishList);

  let addedProduct = wishListData.find((item) => item.id === id);

  function productNavigation() {
    if (location.pathname === "/") {
      navigate(`products/${category}/${id}`);
    } else if (location.pathname === `/products`) {
      navigate(`${category}/${id}`);
    } else if (location.pathname === `/wish_list`) {
      navigate(`../wish_list/${category}/${id}`);
    } else {
      navigate(`${id}`);
    }
  }

  return (
    <div
      key={id}
      className="flex flex-col basis-1/5
                  border-black border rounded-md"
    >
      <div
        className="w-64 h-60 mb-2 rounded-lg overflow-hidden 
                  hover:shadow-xl m-2 cursor-pointer relative"
        onClick={() => productNavigation()}
      >
        <img className="w-full h-full" src={img} alt={name} />
        <Tooltip
          content={`${addedProduct ? "Remove from" : "Add to"} Wish List`}
          placement="bottom"
          // variant="outlined"
          className="bg-white-100 text-white border border-gray border-2"
        >
          <button
            className={`text-white-100 z-index-6 absolute rounded-full p-2`}
            style={{
              position: "absolute",
              right: "6px",
              top: "6px",
              backgroundColor: addedProduct ? "#d73131" : "black",
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toWishList(id));
            }}
          >
            {Heart}
          </button>
        </Tooltip>
      </div>
      <h2
        className="text-center text-xl mb-1 font-bold cursor-pointer 
                    hover:bg-gray-300 py-1.5 px-14 w-fit m-auto rounded-2xl"
        onClick={() => productNavigation()}
      >
        {name}
      </h2>
      <p
        className="text-center text-sm px-3 py-1 text-gray-600 font-normal cursor-pointer"
        onClick={() => productNavigation()}
      >
        {text}
      </p>
      <hr className="border" />
      <div className="flex justify-between p-2 text-gray-600">
        <p>{price}$</p>
        <div className="flex gap-2">
          {color.map((c) => {
            return (
              <div
                key={c}
                style={{ backgroundColor: `${c}` }}
                className="rounded-full w-5 h-5"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
