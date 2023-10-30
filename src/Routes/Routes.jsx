import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Registaion from "../Pages/Registaion/Registaion";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/login',
                element:<LoginPage />
            },
            {
                path:'/registration',
                element: <Registaion />
            }
            
        ]
    }
])