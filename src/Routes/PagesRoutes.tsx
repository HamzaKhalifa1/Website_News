import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../Pages/Layouts/Layout";
import HomePage from "../Pages/HomePage";
import axios from "axios";
import CreateNewBlog from "../Pages/CreateNewBlog";
import React from "react";

const PagesRoutes=()=>{
    const route = createBrowserRouter([
        {path:'/',element:<Layout/>,
            children:[
                {index:true,element:<HomePage/>,loader: async ():Promise<any>=> {
                        const response = await axios.get(`http://localhost:8000/blogs`);
                        const data:any = response.data;
                        return data;
                    }
                },
                {path:'CreateNewBlog',element:<CreateNewBlog/>},
            ]}
    ])
    return(
        <RouterProvider router={route}/>
    );
}

export default PagesRoutes;
