import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../Pages/layouts/Layout";
import HomePage from "../Pages/HomePage";
import CreateEditBlog from "../Pages/CreateEditBlog";
import React from "react";
import EventLoader from "../Component/HomePage/EventLoader";

const PagesRoutes=()=>{
    const route = createBrowserRouter([
        {path:'/',element:<Layout/>,
            children:[
                {index:true,element:<HomePage/>,loader: EventLoader},
                {path:'CreateEditBlog',element:<CreateEditBlog/>},
            ]}
    ])


    return(
        <RouterProvider router={route}/>
    );
}

export default PagesRoutes;
