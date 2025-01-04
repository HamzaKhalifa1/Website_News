import logo from "../../../assets/images/logo.png";
import React, {useEffect} from "react";
import styles from './Header.module.css'
import {NavLink,Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import cookies from 'js-cookie';
import {useDispatch} from "react-redux";
import {setAR, setEN} from "../../../Store/LanguageSlice";


export default function Header (){
    const dispatch = useDispatch();

    const {t} = useTranslation();

    const handleLanguageChange = (lang:string) => {
        if (lang === 'en') {
            dispatch(setEN())
        } else if (lang === 'ar') {
            dispatch(setAR())
       }
        i18n.changeLanguage(lang);
    };
    const lng = cookies.get('i18next') || 'en';
    useEffect(() => {
        window.document.dir=i18n.dir(lng);
    },[lng])

    return (
        <header id={styles.nav} >
            <div id={styles.div_img} >
                <Link to={'/'}><img src={logo} alt="LOGO"/></Link>
            </div>
            <section className={styles.section}>
                <NavLink to="/" className={styles.link}>
                    {t("HomePage")}
                </NavLink>
                <NavLink to="CreateNewBlog" className={styles.link}>
                    {t("Create new Blogs")}
                </NavLink>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>{t("Language")}</button>
                    <div className={styles.dropdownContent}>
                        <button onClick={() => handleLanguageChange('en') }>English</button>
                        <button onClick={() => handleLanguageChange('ar')}>العربية</button>
                    </div>
                </div>
            </section>
        </header>
    );
}