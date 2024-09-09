import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";
import useAxios, { axiosSecure } from "../hooks/useAxios";
import axios from "axios";
// const axiosSecure = useAxios();

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        // Your routes here
        {
            path: "/",
            element: <Home />,
            // loader:()=> axiosSecure('/services'),
           
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
        {
            path:'checkout/:id',
            element: <PrivetRoutes> <Checkout /></PrivetRoutes>,
            loader: ({params}) => axiosSecure(`/services/${params.id}`),
        },
        {
            path: "bookings",
            element: <PrivetRoutes><Bookings /></PrivetRoutes>,
        }
      ],
    },
  ]);

  export default routers;