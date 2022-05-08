import React from 'react';
import axios from 'axios';
import Login from "./Login";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" id="username" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" id="password" />
            </label>
            <label>
                <p>Email</p>
                <input type="email" id="email" />
            </label>
            <label>
                <p>Role</p>
                <input type="text" id="role" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

function createUser(event) {
    return axios({
        method: 'post',
        url: 'http://localhost:8083/api/auth/signup',
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