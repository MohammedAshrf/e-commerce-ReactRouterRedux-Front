import { useSelector } from "react-redux";
import ProductCard from "../components/main/Card";

export default function WishList() {
  const { wishListData } = useSelector((state) => state.wishList);
  // console.log(wishListData);

  return (
    <>
      <div className="px-8 flex flex-wrap gap-12 items-center justify-center">
        {wishListData.length >= 1 ? (
          wishListData.map((product) => {
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
          })
        ) : (
          <div className="pt-4 text-xl">No items added to your wish list</div>
        )}
      </div>
    </>
  );
}
