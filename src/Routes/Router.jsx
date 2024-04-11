import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Pages/Error/PageNotFound";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Gallery from "../Pages/Gallery/Gallery";
import Rooms from "../Pages/Rooms/Rooms";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import RoomDetails from "../Pages/Rooms/RoomDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>
            },
            {
                path: "/roomCard/:id",
                element: <RoomDetails></RoomDetails>
            },
            {
                path: "/userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;