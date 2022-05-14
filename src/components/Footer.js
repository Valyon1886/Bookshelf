import classes from "./all.module.css";
import React from "react";


function Footer(){
    return (

            <footer className={`navbar-fixed-bottom`}>
                <div className={` ${classes.container} ${classes.nav}`}>
                    <p>
                         <a className={` ${classes.l}`} href="mailto:samonchev001@gmail.com">complaints and suggestions</a>
                    </p>
                </div>
            </footer>

    );
}

export default Footer;