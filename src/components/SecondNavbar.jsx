import { Link } from "react-router-dom";
import Clothes from "../assets/images/clothes.jpg";

export default function SecondNavbar() {
  const categories = [
    "Hoodies",
    "Dresses",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
    "Suits",
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {categories.map((button) => {
            return (
              <Link
                key={button}
                className="border-2 border-black py-2 px-4 rounded-md
                hover:bg-black hover:text-white-100 cursor-pointer"
                to={`products/${button}`}
              >
                {button}
              </Link>
            );
          })}
        </div>
        <h2 className="w-11/12 bg-black text-red-600 py-1 text-center text-2xl rounded-lg">
          Sales Up to 50%
        </h2>
        <img
          // style={{ height: "400px" }}
          className="clothes image rounded-lg w-11/12"
          src={Clothes}
          alt="clothes image"
        />
      </div>
    </>
  );
}
