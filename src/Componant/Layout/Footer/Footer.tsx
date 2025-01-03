import React from "react";
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next';

export default function Footer(){
    const {t} = useTranslation();
    return (
        <footer id={styles.footer}>
            <div id={styles.footer_sub}>
                <div><p className={styles.Large_text_footer}><i className="fa-solid fa-user"></i>{t("Hamza Khalifa")}</p></div>
                <div>
                    <a href="https://www.linkedin.com/in/hamza-khalifa-385b23287" target="_blank">
                    <p className={styles.Large_text_footer}>
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </p>
                    </a>
                </div>
                <div>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">
                        <p className={styles.Large_text_footer}>
                            <i className="fa-solid fa-envelope"></i>
                            engHamzaKha@gmail.com
                        </p>
                    </a>
                </div>
                <div><p className={styles.Large_text_footer}><i className="fa-solid fa-phone"></i>0597956633</p></div>
                <div><p className={styles.Large_text_footer}><i className="fa-solid fa-house"></i>{t("Jenin/Haifa Street")}</p></div>
            </div>
        </footer>
    );
}
