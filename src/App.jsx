import { Outlet } from "react-router-dom";
import Footer from "./components/main/Footer";
import Navbar from "./components/main/Navbar";

export default function App() {
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
