import { storeData } from "../assets/data/dummyData";
import ProductCard from "./main/Card";

export default function ProductsSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-8">
        <h2 className="w-11/12 bg-black text-red-600 py-1 text-center text-2xl rounded-lg">
          Summer T-Shirt Sale Up to 30%
        </h2>
        <div className="px-8 flex flex-wrap gap-12 items-center justify-center">
          {storeData
            .filter((product) => product.type === "T-Shirts")
            .slice(0, 6)
            .map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  category={product.type}
                  img={product.img}
                  name={product.name}
                  text={product.text}
                  price={product.price}
                  color={product.color}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
