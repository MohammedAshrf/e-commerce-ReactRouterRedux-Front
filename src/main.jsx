import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import WishList from "./pages/WishList.jsx";
import SigninPage from "./pages/SigninPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="wish_list" element={<WishList />} />
      <Route path="signin" element={<SigninPage />} />
      {/* <Route path="products" element={<Products />} /> */}
      <Route path="products/:category" element={<Products />} />
      <Route path="products/:category/:id" element={<SingleProduct />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
