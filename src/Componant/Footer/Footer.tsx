import React from "react";
import './Footer.css'

export default function Footer(){
    return (
        <footer id="footer">
            <div id="footer_sub">
                <div><p className="Large_text_footer"><i className="fa-solid fa-user"></i>Hamza Khalifa</p></div>
                <div><a href="https://www.linkedin.com/in/hamza-khalifa-385b23287" target="_blank"><p
                    className="Large_text_footer"><i className="fa-brands fa-linkedin"></i>LinkedIn</p></a></div>
                <div><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"><p
                    className="Large_text_footer"><i className="fa-solid fa-envelope"></i>engHamzaKha@gmail.com</p></a>
                </div>
                <div><p className="Large_text_footer"><i className="fa-solid fa-phone"></i>0597956633</p></div>
                <div><p className="Large_text_footer"><i className="fa-solid fa-house"></i>Jenin/Haifa Street</p></div>
            </div>
        </footer>
    );
}
