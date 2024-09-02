import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/main/Navbar.jsx";
import Home from "./Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import WishList from "./pages/WishList.jsx";
import Signin from "./pages/Signin.jsx";
import IsAuthorized from "./components/auth/isAuthorized.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />

      <Route element={<IsAuthorized />}>
        <Route path="wish_list" element={<Outlet />}>
          <Route index element={<WishList />} />
          <Route path=":category/:id" element={<SingleProduct />} />
        </Route>
      </Route>

      <Route path="products" element={<Outlet />}>
        <Route index element={<Products />} />
        <Route path=":category" element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Route>

      {/* <Route path=":id" element={<SingleProduct />} /> */}
      {/* <Route path="products" element={<Products />} />
      <Route path="products/:category" element={<Products />} />
      <Route path="products/:categoryId/:id" element={<SingleProduct />} />
      <Route path="wish_list/:categoryId/:id" element={<SingleProduct />} /> */}

      <Route
        path="*"
        element={
          <h1 className="px-4 text-xl">Sorry, No pages with this link found</h1>
        }
      />
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
