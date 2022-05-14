import React from "react";
import classes from "./all.module.css";
import lib from "../lib.jpg";

function About(props) {
    return (
        <div className="home">
            <div className="container">

                <p className={` ${classes.ab}`}>
                    This electronic resource was created to account for books in the public street library,
                    which is located in the Timokhovsky Park of the Vidnoye city.

                    Use this website to find out which books are available.
                    Contact the administrator to add new books.

                    By editing the Amount field, you make it clear how many books with that name are left in the library

                    Please treat each other with understanding,
                    do not take too many books,
                    and do not hesitate to bring unnecessary books to the library!
                </p>




            </div>
            <h1>
                <img src={lib} alt={'Library'} className={classes.imglib}/>
            </h1>
        </div>
    );
}

export default About;