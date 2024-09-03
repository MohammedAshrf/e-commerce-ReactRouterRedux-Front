import ProductsSection from "../components/ProductsSection";
import SecondNavbar from "../components/SecondNavbar";
import Slider from "../components/Slider";
import "../Global.css";

export default function Home() {
  return (
    <>
      <div>
        <Slider />
        <SecondNavbar />
        <ProductsSection />
      </div>
    </>
  );
}
