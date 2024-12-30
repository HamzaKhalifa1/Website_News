import logo from "../../../assets/images/logo.png";
import React from "react";
import styles from './Header.module.css'
import {NavLink,Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";


export default function Header (){
    const {t} = useTranslation();

    const handleLanguageChange = (lang:string) => {
        i18n.changeLanguage(lang);
        window.document.dir=i18n.dir(lang);
    };

    return (
        <header id={styles.nav} >
            <div id={styles.div_img} >
                <Link to={'/'}><img src={logo} alt="LOGO"/></Link>
            </div>
            <section className={styles.section}>
                <NavLink to="/" className={styles.link}>
                    HomePage
                </NavLink>
                <NavLink to="CreateNewBlog" className={styles.link}>
                    Create new Blogs
                </NavLink>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>{t("Language")}</button>
                    <div className={styles.dropdownContent}>
                        <button onClick={() => handleLanguageChange('en')}>English</button>
                        <button onClick={() => handleLanguageChange('ar')}>العربية</button>
                    </div>
                </div>
            </section>
        </header>
    );
}