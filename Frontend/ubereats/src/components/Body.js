import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FrontPage from "./FrontPage/FrontPage";
import Restaurants from "./RestaurantsPage/Restaurants";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />,
    },
    {
      path:"/restaurants",
      element: <Restaurants />
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
