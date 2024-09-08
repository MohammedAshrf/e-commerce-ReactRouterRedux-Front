import { Outlet } from "react-router-dom";
import Footer from "./components/main/Footer";
import Navbar from "./components/main/Navbar";
// import { useEffect, useState } from "react";
// import { storeData } from "./store/APIdata";

export default function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await storeData(); // Await the Promise here
  //       setProducts(data); // Set the products to state
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // console.log(products);

  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-0 h-screen">
        <div className="grow-0">
          <Navbar />
        </div>
        <div className="grow">
          <Outlet />
        </div>
        <div className="grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
