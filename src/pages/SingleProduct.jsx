import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBackArrow from "../assets/SVGs/GoBackArrow";

export default function SingleProduct() {
  const { data } = useSelector((state) => state.products);
  const { category, id } = useParams();
  //   console.log(params);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div
          className="mx-8 my-2 py-1 px-2 flex gap-1 cursor-pointer
                    bg-gray-200 hover:bg-gray-300 w-fit rounded-full"
          onClick={() => navigate(`../products/${category}`)}
        >
          {GoBackArrow} Back to all products
        </div>
        <div className="px-8 flex flex-wrap gap-12 items-center justify-center">
          {data
            .filter((product) => product.type === category)
            .filter((product) => product.id === id)
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
                    onClick={() => console.log("singleProduct")}
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
