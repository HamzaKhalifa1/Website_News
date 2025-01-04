import React from 'react';
import Header from '../../Component/Layout/Header'
import Footer from '../../Component/Layout/Footer'
import Main_Title from "../../Component/HomePage/Main_Title";
import {Outlet}  from 'react-router-dom';


const Layout     = () => {
    return (
        <div>
            <Header/>
            <Main_Title/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
