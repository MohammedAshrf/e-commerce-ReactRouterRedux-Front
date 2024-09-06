import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  changeAmount,
  handleOpen,
  removeFromCart,
} from "../store/slices/CartSlice";

export default function ShoppingBag() {
  const { cart, open, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Dialog
          open={open}
          handler={() => dispatch(handleOpen())}
          color="black"
          className="bg-white-100"
          size="lg"
        >
          <DialogHeader className="border-b border-gray-600">
            Shopping Bag
          </DialogHeader>
          <DialogBody className="py-4 text-lg h-96 overflow-y-scroll">
            {cart.length < 1
              ? "Your bag is empty"
              : cart.map((product) => {
                  return (
                    <div key={product.id + product.size + product.color}>
                      <div className="flex flex-col sm:flex-row items-center py-4">
                        <div className="basis-1/3 ps-4">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-36 rounded-lg"
                          />
                        </div>
                        <div className="ps-4 basis-2/3">
                          <h2 className="text-center sm:text-start pb-2 text-2xl text-black font-serif font-bold">
                            {product.name}
                          </h2>
                          <div className="text-gray-900 flex justify-between pb-2">
                            Amount:
                            <span className="basis-1/2 ps-6 flex items-center gap-6">
                              <p
                                className="border-2 border-red-600 rounded-full w-fit px-3  text-center
                              font-bold hover:text-white-100 hover:bg-red-600 cursor-pointer"
                                onClick={() =>
                                  dispatch(
                                    changeAmount({
                                      ...product,
                                      value: "decreament",
                                    })
                                  )
                                }
                              >
                                -
                              </p>
                              {product.amount}
                              <p
                                className="border-2 border-red-600 rounded-full w-fit px-3  text-center
                              font-bold hover:text-white-100 hover:bg-red-600 cursor-pointer"
                                onClick={() =>
                                  dispatch(
                                    changeAmount({
                                      ...product,
                                      value: "increament",
                                    })
                                  )
                                }
                              >
                                +
                              </p>
                            </span>
                          </div>
                          <p className="text-gray-900 flex justify-between pb-1">
                            Size:
                            <span className="basis-1/2 ps-6">
                              {product.size}
                            </span>
                          </p>
                          <p className="text-gray-900 flex justify-between pb-1">
                            Color:
                            <span className="basis-1/2 ps-6 flex items-center gap-3">
                              {product.color}{" "}
                              <span
                                style={{ backgroundColor: product.color }}
                                className="rounded-full w-5 h-5"
                              ></span>
                            </span>
                          </p>
                          <p className="flex justify-between text-gray-900 pb-1">
                            Single Item Price:
                            <span className="basis-1/2 ps-3 sm:ps-6 mt-auto">
                              {product.price}
                            </span>
                          </p>
                          <p className="text-gray-900 flex justify-between pb-1">
                            Total Item Price:
                            <span className="basis-1/2 ps-3 sm:ps-6 mt-auto">
                              {product.price * product.amount}
                            </span>
                          </p>
                          <Button
                            className="w-full sm:w-fit mt-2"
                            variant="gradient"
                            color="red"
                            onClick={() => dispatch(removeFromCart(product))}
                          >
                            <span className="text-white-100">Remove</span>
                          </Button>
                        </div>
                      </div>
                      <hr className="w-11/12 m-auto border-gray-400" />
                    </div>
                  );
                })}
          </DialogBody>
          <DialogFooter className="justify-between border-t border-gray-600">
            <p className="text-lg text-gray-600 font-bold">
              Total Price: {totalPrice}
            </p>
            <div>
              <Button
                variant="text"
                color="red"
                onClick={() => dispatch(handleOpen())}
                className="mr-1"
              >
                <span>close</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={() => dispatch(handleOpen())}
              >
                <span className="text-white-100">Continue to Buy</span>
              </Button>
            </div>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
