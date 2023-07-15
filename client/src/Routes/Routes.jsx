import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
