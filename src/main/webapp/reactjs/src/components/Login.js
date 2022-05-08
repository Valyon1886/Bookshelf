import React from 'react';
import axios from 'axios';

export default function Login({setToken}) {
    const handleSubmit = async e => {
        e.preventDefault();
        const user = loginUser(e);
        user.then(data => {
            if (data != null) {
                console.log(data);
                setToken(data.tokenType + ' ' + data.accessToken);
            }
        });
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
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

function loginUser(event) {
    return axios({
        method: 'post',
        url: 'http://localhost:8083/api/auth/signin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify({
            username: event.target.username.value,
            password: event.target.password.value
        })
    }).then(function (response) {
        return response.data;
    })
        .catch(function (error) {
            alert(error);
            console.log(error);
        });

}