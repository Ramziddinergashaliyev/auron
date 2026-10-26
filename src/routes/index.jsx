import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Quality from "../pages/quality/Quality";
import Sustainability from "../pages/sustainability/Sustainability";
import Technology from "../pages/technology/Technology";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/quality",
                element: <Quality />
            },
            {
                path: "/sustainability",
                element: <Sustainability />
            },
            {
                path: "/technology",
                element: <Technology />
            }
        ]
    }
])
