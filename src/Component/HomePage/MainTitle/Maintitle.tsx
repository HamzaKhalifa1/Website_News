import React from "react";
import styles from './Maintitle.module.css';
import { useTranslation } from 'react-i18next';

export default function MainTitle() {
    const { t } = useTranslation();
    return (
        <div id={styles.mainTitle}>
            <h1>{t("currentlyBrowsingDesign")}</h1>
        </div>
    );
}
