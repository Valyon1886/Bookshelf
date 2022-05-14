import classes from "./all.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../book.ico";

function Header() {
    return (
        <div className={`navigation ${classes.all}`}>
            <nav className={`navbar navbar-fixed-top`}>
                <div className={` text-center ${classes.container} ${classes.nav}`}>
                    <div className={` container text-center ${classes.container} ${classes.nav1}`}>
                    <NavLink className={`navbar-brand ${classes.par} `} to="/">
                        <img src={logo} alt={'Logo'} className={classes.img}/>
                    </NavLink>
                    <NavLink className={`navbar-brand ${classes.par} ${classes.links}`} to="/">
                        List of books
                    </NavLink>
                    <NavLink className={`navbar-brand ${classes.par} ${classes.links}`} to="/about">
                        About project
                    </NavLink>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;