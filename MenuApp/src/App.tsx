import React from "react";
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Layout from "./Layout";
import MenuDetails from "./MenuDetails";

const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:idi" element={<MenuDetails />} />
        <Route path="about" element={<About />} />
    </Route>
))
export default function App(){
    return(
        
        
            <RouterProvider router={router} />
    )
}
