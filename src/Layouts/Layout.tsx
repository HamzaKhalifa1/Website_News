import React from 'react';
import { Header, Footer } from '../Componant/Header_Footer';
import Main_Title from "../Componant/Main_Title";
import {Outlet,NavLink}  from 'react-router-dom';
import styles from './Layout.module.css'


const Layout     = () => {
    return (
        <div>
            <Header/>
            <Main_Title/>
            <Outlet/>
            <section className={styles.section}>
                <NavLink to="/" className={styles.link}>
                    HomePage
                </NavLink>
                <NavLink to="/CreateNewBlog" className={styles.link}>
                    Home
                </NavLink>
            </section>
            <Footer/>
        </div>
    );
};

export default Layout;
