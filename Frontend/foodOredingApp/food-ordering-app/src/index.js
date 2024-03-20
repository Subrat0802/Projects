import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import { Provider } from "react-redux";
import appStore from "./utils/reduxStore/appStore";
import CartPage from "./pages/CartPage";
import UberGpt from "./pages/UberGpt";
import OrderCon from "./pages/OrderCon";

const AppLayout = () => {
  return (
    <div className="select-none">
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <MenuPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      
    ],
  },
  {
    path: "/orderconfirm",
        element: <OrderCon />,
  },
  {
    path: "/uberGPT",
    element: <Provider store={appStore}><UberGpt /></Provider>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
