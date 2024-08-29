import ProductsSection from "./components/ProductsSection";
import SecondNavbar from "./components/SecondNavbar";
import Slider from "./components/Slider";
import "./Global.css";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <Slider />
          <SecondNavbar />
          <ProductsSection />
        </div>
        <div className="text-3xl font-bold">Footer</div>
      </div>
    </>
  );
}

// <h1 className="text-3xl underline font-medium font-['inter']">Hello world!</h1>;

export default Home;
