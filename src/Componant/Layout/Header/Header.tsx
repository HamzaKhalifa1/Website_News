import logo from "../../../assets/images/logo.png";
import React from "react";
import styles from './Header.module.css'
import {NavLink,Link} from "react-router-dom";


export default function Header (){
    return (
        <header id={styles.nav} >
            <div id={styles.div_img} >
                <Link to={'/'}><img src={logo} alt="LOGO"/></Link>
            </div>
            <section className={styles.section}>
                <NavLink to="/" className={styles.link}>
                    HomePage
                </NavLink>
                <NavLink to="/CreateNewBlog" className={styles.link}>
                    Create new Blogs
                </NavLink>

            </section>
        </header>
    );
}