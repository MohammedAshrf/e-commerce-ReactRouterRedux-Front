import { useDispatch, useSelector } from "react-redux";
import {
  nextSlide,
  prevSlide,
  slideBullets,
} from "../store/slices/SliderSlice";
import { sliderData } from "../assets/data/dummyData";
import LeftArrow from "../assets/SVGs/LeftArrow";
import RightArrow from "../assets/SVGs/RightArrow";

export default function Slider() {
  const sliderIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="slider relative mb-8 m-auto overflow-hidden">
          <img
            className="w-full h-full"
            src={sliderData[sliderIndex].img}
            alt="shoe1"
          />
          <div
            className="absolute z-10 
          inset-y-2/4 left-3 cursor-pointer
          w-fit h-fit bg-white-50
          hover:bg-white-75 rounded-full p-2.5"
            onClick={() => dispatch(prevSlide(sliderIndex - 1))}
          >
            {LeftArrow}
          </div>

          <div
            className="absolute z-10 
          inset-y-2/4 right-3 cursor-pointer 
          w-fit h-fit bg-white-50
          hover:bg-white-75 rounded-full p-2.5"
            onClick={() => dispatch(nextSlide(sliderIndex + 1))}
          >
            {RightArrow}
          </div>
          <h2
            className="absolute text-white-100 z-10 top-1/4 text-xl sm:text-3xl lg:text-4xl font-serif"
            style={{ left: "10.5%" }}
          >
            {sliderData[sliderIndex].text}
          </h2>
          <div
            className="flex justify-center gap-6 
          absolute z-10 bottom-4"
            style={{ transform: "translateX(-40%)", left: "50%" }}
          >
            {sliderData.map((bullet) => {
              {
                return (
                  <div
                    key={bullet.id}
                    className={`rounded-full h-4 w-4 sm:h-5 sm:w-5 cursor-pointer ${
                      parseInt(bullet.id) === sliderIndex
                        ? "bg-green-300"
                        : "bg-white-100"
                    }`}
                    onClick={() => dispatch(slideBullets(parseInt(bullet.id)))}
                  ></div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

/*
========> another way for getting the iamges in the slider:

{sliderData.map((image) => {
  return (
    parseInt(image.id) === sliderIndex && (
      <img
        className="w-full h-full"
        key={image.id}
        src={image.img}
        alt="image"
      />
    )
  );
})}

*/
