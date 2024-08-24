import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsFilter } from "../store/slices/ProductsSlice";

export default function Products() {
  const { category } = useParams();
  const { categories, filters, data } = useSelector((state) => state.products);
  // console.log(data);
  const dispatch = useDispatch();
  // console.log(categories);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="flex justify-center gap-4 mb-2">
          {categories.map((button) => {
            return (
              <Link
                key={button}
                className="border-2 border-black py-2 px-4 rounded-md
                hover:bg-black hover:text-white-100 cursor-pointer"
                to={`../products/${button}`}
              >
                {button}
              </Link>
            );
          })}
        </div>
        <h1 className="text-5xl ps-8 font-serif font-bold">{category}</h1>
        <div className="flex justify-start gap-4 mb-2 ps-8 py-4">
          {filters.map((button) => {
            return (
              <button
                key={button}
                className="border-2 border-black py-2 px-4 rounded-md
                hover:bg-black hover:text-white-100 cursor-pointer"
                to={`products/${button}`}
                onClick={() => {
                  dispatch(productsFilter(button));
                }}
              >
                {button}
              </button>
            );
          })}
        </div>
        <div className="px-8 flex flex-wrap gap-12 items-center justify-center">
          {data
            .filter((product) => product.type === category)
            .map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col basis-1/5
                  border-black border rounded-md"
                >
                  <div
                    className="w-64 h-48 mb-4 rounded-lg overflow-hidden 
                  hover:shadow-xl m-2 cursor-pointer"
                    onClick={() => navigate(product.id)}
                  >
                    <img
                      className="w-full h-full"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <h2 className="text-center text-xl mb-1 font-bold">
                    {product.name}
                  </h2>
                  <p className="text-center text-sm px-3 py-1 text-gray-600 font-normal">
                    {product.text}
                  </p>
                  <hr className="border" />
                  <div className="flex justify-between p-2 text-gray-600">
                    <p>{product.price}$</p>
                    <div className="flex gap-2">
                      {product.color.map((c) => {
                        {
                          return (
                            <div
                              key={c}
                              style={{ backgroundColor: `${c}` }}
                              className="rounded-full w-5 h-5"
                            ></div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
