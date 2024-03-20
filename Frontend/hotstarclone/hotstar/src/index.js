import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Navbar from "./components/FirstPage/Navbar";
import { Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MovieDetails from "./components/SecondPage/MovieDetails";


function AppLayout() {
  return (
    <div className=" scroll-smooth font-newfont">
      <Provider store={appStore}>
      <Navbar />
      <Outlet />
      </Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
        element: <FirstPage /> 
      },
      {
        path:"/moviePage",
        element: <SecondPage />
      },
      {
        path:"/movieDetails/:id",
        element: <MovieDetails />
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
