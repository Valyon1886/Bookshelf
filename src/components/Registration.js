import React from 'react';
import axios from 'axios';
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import classes from "./all.module.css";

export default function Registration({setToken}) {
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = createUser(e);
        navigate("/");
        // user.then(data => {
        //     if (data != null) {
        //         console.log(data);
        //         setToken(data.tokenType + ' ' + data.accessToken);
        //     }
        // });
    };

    return (
        <form className="d-flex mt-5" onSubmit={handleSubmit}>
            <label className={`${classes.mask}`}>
                <p>Username</p>
                <input className={`${classes.for}`} type="text" id="username" />
            </label>
            <br></br>
            <label className={`${classes.mask}`}>
                <p>Password</p>
                <input className={`${classes.for}`} type="password" id="password" />
            </label>
            <br></br>
            <label className={`${classes.mask}`}>
                <p>Email</p>
                <input className={`${classes.for}`} type="email" id="email" />
            </label>
            <br></br>
            <label className={`${classes.mask}`}>
                <p>Role</p>
                <input className={`${classes.for}`} type="text" id="role" />
            </label>
            <br></br>
            <div className={`${classes.mask}`}>
                <button className={`btn ${classes.button3}`} type="submit">Submit</button>
            </div>
        </form>
    );
}

function createUser(event) {
    return axios({
        method: 'post',
        url: 'https://murmuring-tor-23246.herokuapp.com/api/auth/signup',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify({
            username: event.target.username.value,
            password: event.target.password.value,
            email: event.target.email.value,
            role: [event.target.role.value],
        })
    }).then(function (response) {
        return response.data;
    })
        .catch(function (error) {
            alert(error);
            console.log(error);
        });

}