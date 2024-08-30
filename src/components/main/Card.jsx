/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, img, name, text, price, color }) {
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="flex flex-col basis-1/5
                  border-black border rounded-md"
    >
      <div
        className="w-64 h-60 mb-2 rounded-lg overflow-hidden 
                  hover:shadow-xl m-2 cursor-pointer"
        onClick={() => navigate(`${id}`)}
      >
        <img className="w-full h-full" src={img} alt={name} />
      </div>
      <h2
        className="text-center text-xl mb-1 font-bold cursor-pointer 
                    hover:bg-gray-300 py-1.5 px-14 w-fit m-auto rounded-2xl"
        onClick={() => navigate(`${id}`)}
      >
        {name}
      </h2>
      <p
        className="text-center text-sm px-3 py-1 text-gray-600 font-normal cursor-pointer"
        onClick={() => navigate(`${id}`)}
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
