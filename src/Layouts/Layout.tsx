import React from 'react';
import { Header, Footer } from '../Componant/Header_Footer';
import Main_Title from "../Componant/Main_Title";
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
