import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsFilter } from "../store/slices/ProductsSlice";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import ProductCard from "../components/main/Card";

export default function Products() {
  const { category } = useParams();
  const { categories, filters, data, colors, sizes } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const finalFilteredData = data.filter((product) => product.type === category);

  // == Category check == //
  const allProducts = category ? finalFilteredData : data;

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

// <div
//   key={product.id}
//   className="flex flex-col basis-1/5
//   border-black border rounded-md"
// >
//   <div
//     className="w-64 h-48 mb-2 rounded-lg overflow-hidden
//   hover:shadow-xl m-2 cursor-pointer"
//     onClick={() => navigate(product.id)}
//   >
//     <img
//       className="w-full h-full"
//       src={product.img}
//       alt={product.name}
//     />
//   </div>
//   <h2
//     className="text-center text-xl mb-1 font-bold cursor-pointer
//     hover:bg-gray-300 py-1.5 px-14 w-fit m-auto rounded-2xl"
//     onClick={() => navigate(product.id)}
//   >
//     {product.name}
//   </h2>
//   <p
//     className="text-center text-sm px-3 py-1 text-gray-600 font-normal cursor-pointer"
//     onClick={() => navigate(product.id)}
//   >
//     {product.text}
//   </p>
//   <hr className="border" />
//   <div className="flex justify-between p-2 text-gray-600">
//     <p>{product.price}$</p>
//     <div className="flex gap-2">
//       {product.color.map((c) => {
//         {
//           return (
//             <div
//               key={c}
//               style={{ backgroundColor: `${c}` }}
//               className="rounded-full w-5 h-5"
//             ></div>
//           );
//         }
//       })}
//     </div>
//   </div>
// </div>
