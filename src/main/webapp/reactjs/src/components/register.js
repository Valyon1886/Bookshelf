import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

async function registerUser(credentials) {
    return fetch('http://localhost:8083/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data)
}

export default function Register() {
    let navigate = useNavigate();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [roles, setRoles] = useState("user");

    const handleSubmit = async e => {
        e.preventDefault();
        const answer = await registerUser({
            username: username,
            email: email,
            password: password,
            roles: roles.split(",").map(i => i.trim())
        });
        console.log(answer);
        const json_answer = await answer.json();
        console.log(json_answer);
        if (answer.status === 200) {
            navigate("/login");
        } else if (document.querySelector("#warning") === null) {
            let div = document.querySelector("#main")
            let tag = document.createElement("p");
            tag.id = "warning";
            tag.style.color = "red";
            let text = document.createTextNode(json_answer.message);
            tag.appendChild(text);
            div.appendChild(tag);
        } else if (document.querySelector("#warning") !== null) {
            let tag = document.querySelector("#warning");
            tag.removeChild(tag.firstChild);
            let text = document.createTextNode(json_answer.message);
            tag.appendChild(text);
        }
    }

    return (
        <div id={"main"} className="login-wrapper">
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>
                    <p>Roles (several using ',') (for 'admin')</p>
                    <input onChange={e => setRoles(e.target.value)} value={roles}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}