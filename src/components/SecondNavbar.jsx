import { Link } from "react-router-dom";
import Clothes from "../assets/images/clothes.jpg";
import { useSelector } from "react-redux";

export default function SecondNavbar() {
  const { categories } = useSelector((state) => state.products);

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
          className="clothes-image h-[250px] sm:h-[350px] md:h-[450px]
          lg:h-[550px] rounded-lg w-11/12"
          src={Clothes}
          alt="clothes image"
        />
      </div>
    </>
  );
}
