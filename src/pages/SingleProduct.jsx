import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GoBackArrow from "../assets/SVGs/GoBackArrow";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../store/slices/CartSlice";
import { useState } from "react";

export default function SingleProduct() {
  const { data } = useSelector((state) => state.products);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const location = useLocation();

  const theSingleProduct = data.find((product) => product.id === id);

  const backnavigation = "..";

  const backstatement =
    "Go to " + location.pathname.split("/")[2] + " category";

  return (
    <>
      <div>
        <div
          className="mx-6 my-2 mb-4 py-1 px-2 flex gap-1 cursor-pointer
                    bg-gray-200 hover:bg-gray-300 w-fit rounded-full"
          onClick={() => navigate(backnavigation)}
        >
          {GoBackArrow} {backstatement}
        </div>
        <div className="flex items-center justify-center gap-12 px-12">
          {theSingleProduct && (
            <div
              key={theSingleProduct.id}
              className="flex flex-col md:flex-row items-center border-black border rounded-md"
              style={{ gap: "8%" }}
            >
              <div
                className="w-1/3 mb-4 rounded-lg overflow-hidden 
                  shadow-2xl m-2"
                onClick={() => console.log("singleProduct")}
              >
                <img
                  className="w-full h-full"
                  src={theSingleProduct.img}
                  alt={theSingleProduct.name}
                />
              </div>
              <div
                className="w-full md:w-1/2 flex flex-col items-start
                   justify-center gap-2 text-center"
              >
                <h2 className="w-full text-center text-xl mb-1 font-bold">
                  {theSingleProduct.name}
                </h2>
                <p className="w-full text-center font-bold text-red-800">
                  15% OFF
                </p>
                <p
                  className="w-full text-center md:text-start text-sm text-gray-600 
                    ont-normal px-4 md:px-0"
                >
                  {theSingleProduct.text}
                </p>
                {theSingleProduct.size && (
                  <div className="w-10/12 m-auto md:w-full min-w-[200px]">
                    <label className="block mb-1 text-sm text-slate-800">
                      Pick a size
                    </label>
                    <div className="relative w-10/12 m-auto">
                      <select
                        className="w-full h-10 bg-transparent 
                                placeholder:text-slate-400 text-slate-700
                                text-sm border border-slate-200 rounded px-3
                                py-2 transition duration-300 ease focus:outline-none
                                focus:border-slate-400 hover:border-slate-400
                                shadow-sm focus:shadow-md appearance-none
                                cursor-pointer"
                        onClick={(e) => setSelectedSize(e.target.value)}
                      >
                        {theSingleProduct.size.map((size) => {
                          return (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </select>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.2"
                        stroke="currentColor"
                        className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 
                          text-slate-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="w-10/12 m-auto md:w-full min-w-[200px]">
                  <label className="block mb-1 text-sm text-slate-800">
                    Select a Color
                  </label>
                  <div className="relative w-10/12 m-auto">
                    <select
                      className="w-full h-10 bg-transparent 
                                placeholder:text-slate-400 text-slate-700
                                text-sm border border-slate-200 rounded px-3
                                py-2 transition duration-300 ease focus:outline-none
                                focus:border-slate-400 hover:border-slate-400
                                shadow-sm focus:shadow-md appearance-none
                                cursor-pointer"
                      onClick={(e) => setSelectedColor(e.target.value)}
                    >
                      {theSingleProduct.color.map((color) => {
                        return (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.2"
                      stroke="currentColor"
                      className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 
                          text-slate-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </div>
                </div>

                <Tooltip
                  content="Add to cart"
                  placement="bottom"
                  variant="outlined"
                  className="bg-white text-white border border-gray border-2"
                >
                  <Button
                    className="my-2 mx-auto"
                    color="black"
                    variant="outlined"
                    size="md"
                    ripple={true}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          amount: 1,
                          id: theSingleProduct.id,
                          img: theSingleProduct.img,
                          name: theSingleProduct.name,
                          size: selectedSize
                            ? selectedSize
                            : theSingleProduct.size
                            ? theSingleProduct.size[0]
                            : "one size product",

                          color: selectedColor
                            ? selectedColor
                            : theSingleProduct.color[0],
                          price: theSingleProduct.price,
                        })
                      )
                    }
                  >
                    Add to cart
                  </Button>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
