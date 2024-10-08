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
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import WishList from "./pages/WishList.jsx";
import Signin from "./pages/Signin.jsx";
import App from "./App.jsx";
import { makeServer } from "./server";
// import IsAuthorized from "./components/auth/IsAuthorized.jsx";
import IsAuthorized from "./components/auth/IsAuthorized.jsx";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

let imageUrl = `https://firebasestorage.googleapis.com/v0/b/storedata-b21dd.appspot.com
/o/bag1.jpg?alt=media&token=bf86f968-adb5-445a-bd99-b0909bba5d35`;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route
        path="image"
        element={
          <div>
            <img className="w-[200px]" src={imageUrl} alt="try an image" />
          </div>
        }
      />

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
