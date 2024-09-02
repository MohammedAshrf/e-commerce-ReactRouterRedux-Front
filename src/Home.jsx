import Footer from "./components/main/Footer";
import ProductsSection from "./components/ProductsSection";
import SecondNavbar from "./components/SecondNavbar";
import Slider from "./components/Slider";
import "./Global.css";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <Slider />
          <SecondNavbar />
          <ProductsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
