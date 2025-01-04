import React from "react";
import styles from './Main_title.module.css'
import { useTranslation } from 'react-i18next';

export default function Main_title(){
    const {t} = useTranslation();
    return (
        <div id={styles['main-title']}>
            <h1>{t("Currently Browsing: Design")}</h1>
        </div>
    );
}