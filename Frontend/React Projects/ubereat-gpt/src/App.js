import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import { useState } from "react";
import OrderCon from "./pages/OrderCon";

const AppLayout = () => {
  return (
    <div className="bg-[#0F0F0F] text-white ">
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);

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
          path: "/menu",
          element: <MenuPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/menu/:id",
          element: <MenuPage />,
        },
      ],
    },
    {
      path: "/orderconfirm",
          element: <OrderCon />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
