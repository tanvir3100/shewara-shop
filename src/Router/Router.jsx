import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashBoard from "../Pages/DashBoard/DashBoard";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/dashBoard',
                element: <DashBoard />
            },
        ]
    },
]);

export default Router;