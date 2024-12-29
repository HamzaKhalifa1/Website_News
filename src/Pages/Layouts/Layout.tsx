import React from 'react';
import Header from '../../Componant/Layout/Header'
import Footer from '../../Componant/Layout/Footer'
import Main_Title from "../../Componant/HomePage/Main_Title";
import {Outlet}  from 'react-router-dom';
import Loader from "../../Hooks/Loader/useLoader";


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
