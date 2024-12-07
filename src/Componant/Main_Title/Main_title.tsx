import React from "react";
import styles from './Main_title.module.css'

export default function Main_title(){
    return (
        <div id={styles['main-title']}>
            <h1>Currently Browsing: Design</h1>
        </div>
    );
}