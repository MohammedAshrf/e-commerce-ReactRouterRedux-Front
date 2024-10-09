import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  // fetchProducts,
  firebaseProducts,
  productsFilter,
} from "../store/slices/ProductsSlice";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import ProductCard from "../components/main/Card";
import { useEffect } from "react";

export default function Products() {
  const { category } = useParams();
  const { categories, filters, data, colors, sizes, status } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(firebaseProducts());
    }
  }, [dispatch, status]);

  console.log(data);
  const finalFilteredData = data.filter((product) => product.type === category);

  // === Category check === //
  const allProducts = category ? finalFilteredData : data;

  // === dispatch for miradeJS data === //
  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchProducts());
  //   }
  // }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="text-xl font-bold ms-[30px] mt-[30px]">Loading...</div>
    );
  }

  if (status === "failed") {
    return <div>Error fetching products</div>;
  }

  return (
    <>
      <div className="pb-4">
        <div className="flex justify-center gap-4 mb-2 flex-wrap sm:my-4">
          {categories.map((button) => {
            return (
              <NavLink
                key={button}
                className={({ isActive }) =>
                  `border-2 border-black py-2 px-4 rounded-md
                  hover:bg-black hover:text-white-100 cursor-pointer
                  ${isActive ? "bg-black text-white-100" : ""}`
                }
                to={`/products/${button}`}
              >
                {button}
              </NavLink>
            );
          })}
        </div>
        <h1 className="text-4xl sm:text-5xl my-4 sm:my-0 ps-8 font-serif font-bold">
          {category ? category : "All Products"}
        </h1>
        <div className="flex justify-start gap-4 flex-wrap sm:nowrap mb-2 ps-8 py-4">
          {filters.map((button) => {
            return button !== "Select a color" && button !== "Select a size" ? (
              <button
                key={button}
                className={`border-2 border-black py-2 px-4 rounded-md
                ${
                  button === "Clear Filter"
                    ? "bg-black text-white-100 hover:bg-white-100 hover:text-black"
                    : "hover:bg-black hover:text-white-100"
                } cursor-pointer`}
                to={`products/${button}`}
                onClick={() => {
                  dispatch(productsFilter(button));
                }}
              >
                {button}
              </button>
            ) : (
              <Menu key={button}>
                <MenuHandler className="bg-white-100" id="menuHandler">
                  <Button>{button}</Button>
                </MenuHandler>
                <MenuList className="bg-white-100">
                  {button === "Select a color"
                    ? colors.map((color) => {
                        return (
                          <MenuItem
                            key={color}
                            className="bg-white-100 border mb-1"
                            style={{ color: color }}
                            onClick={() =>
                              dispatch(
                                productsFilter({
                                  filterType: button,
                                  value: color,
                                })
                              )
                            }
                          >
                            {color}
                          </MenuItem>
                        );
                      })
                    : sizes.map((size) => {
                        return (
                          <MenuItem
                            key={size}
                            className="bg-white-100 border mb-1"
                            onClick={() =>
                              dispatch(
                                productsFilter({
                                  filterType: button,
                                  value: size,
                                })
                              )
                            }
                          >
                            {size}
                          </MenuItem>
                        );
                      })}
                </MenuList>
              </Menu>
            );
          })}
        </div>
        <div className="px-8 flex flex-wrap gap-12 items-center justify-center">
          {allProducts.length >= 1 ? (
            allProducts.map((product) => {
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
            <div className="pt-4 text-xl">No items matches your filter</div>
          )}
        </div>
      </div>
    </>
  );
}
