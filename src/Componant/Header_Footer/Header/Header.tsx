import logo from "../../../assets/imges/logo.png";
import React from "react";
import styles from './Header.module.css'


export default function Header (){
    return (
        <header id={styles.nav} >
            <div id={styles.div_img} >
                <a href="./index.html"><img src={logo} alt="LOGO"/></a>
            </div>
            <div id={styles.nav_sub}>
                <ol className={styles.nav_info}>
                    <li className={styles.class_info}>
                        <select className={styles.select}>
                            <option selected>CATEGORIES</option>
                            <option >CATEGORIES1</option>
                            <option >CATEGORIES2</option>
                            <option >CATEGORIES3</option>
                        </select>
                    </li>
                    <li className={styles.class_info}>
                        <select className={styles.select}>
                            <option selected>DEALS</option>
                            <option >DEALS1</option>
                            <option >DEALS2</option>
                            <option >DEALS3</option>
                        </select>
                    </li>
                    <li className={styles.class_info}>
                        <a href="">ABOUT</a>
                    </li>
                    <li className={styles.class_info}>
                        <a href="">ADVERTISE</a>
                    </li>
                </ol>
            </div>
            <div className={styles['dropdown-container']}>
                <button className={styles['menu-button']}><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#f7f7f8" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
                <div className={styles['dropdown-menu']}>
                    <a href="#">CATEGORIES</a>
                    <a href="#">DEALS</a>
                    <a href="#">ABOUT</a>
                    <a href="#">ADVERTISE</a>
                </div>
            </div>
        </header >
    );
}