import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { handleOpen } from "../store/slices/CartSlice";

export default function ShoppingBag() {
  const { open } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(open);

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
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => dispatch(handleOpen())}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => dispatch(handleOpen())}
            >
              <span className="text-white-100">Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
