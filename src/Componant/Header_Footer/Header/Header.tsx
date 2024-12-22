import logo from "../../../assets/images/logo.png";
import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


export default function Header (){
    return (
        <header id={styles.nav} >
            <div id={styles.div_img} >
                <a href="./index.html"><img src={logo} alt="LOGO"/></a>
            </div>
            <section className={styles.section}>
                <NavLink to="/" className={styles.link}>
                    HomePage
                </NavLink>
                <NavLink to="/CreateNewBlog" className={styles.link}>
                    Create new Blogs
                </NavLink>
            </section>
        </header >
    );
}