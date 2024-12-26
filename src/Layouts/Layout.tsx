import React from 'react';
import { Header, Footer } from '../Componant/Header_Footer';
import Main_Title from "../Componant/Main_Title";
import {Outlet}  from 'react-router-dom';
import Loader from "../Hooks/Loader/useLoader";


const Layout     = () => {
    return (
        <div>
            <Header/>
            <Main_Title/>
            <Loader/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
