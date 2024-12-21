import React from 'react';
import './App.css';
import styled from 'styled-components';
import Layout from './Layouts/Layout';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from "./Containers/HomePage/index";
import CreateNewBlog from "./Containers/CreateNewBlog/index";

const DivHome = styled.div`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: #f5f9fc;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    li a {
        text-decoration: none;
        color: #7273b0;
        font-size: 17px;
    }
    li a:hover {
        text-decoration: none;
        color: white;
        font-size: 17px;
        margin-top: 10px;
    }
    p {
        margin: 0;
        width: 100%;
    }
`;

const route = createBrowserRouter([
    {path:'/',element:<Layout/>,
        children:[
        {index:true,element:<HomePage/>},
        {path:'CreateNewBlog',element:<CreateNewBlog/>},
    ]}
])

function App() {
    return (
        <DivHome>
            <RouterProvider router={route}/>
        </DivHome>
    );
}

export default App;
