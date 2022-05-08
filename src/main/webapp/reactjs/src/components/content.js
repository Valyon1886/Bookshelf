import React, {useLayoutEffect, useState} from "react";
import useToken from "./useToken";
import Login from "./Login";
import App from "../App";

function Content() {
    const [examples, setExamples] = useState(true);

    const { token, setToken } = useToken();

    useLayoutEffect(() => {
        getExamples();
    });

    function getExamples() {
        fetch('http://localhost:8083/api/examples/', {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                setExamples(data);
            });
    }

    function createExample() {
        let exampleText = prompt('Enter text');
        fetch('http://localhost:8083/api/examples/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({exampleText}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getExamples();
            });
    }

    function deleteExample() {
        let id = prompt('Enter example ID');
        fetch(`http://localhost:8083/api/examples/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getExamples();
            });
    }

    function updateExample() {
        let id = prompt('Enter example ID');
        let exampleText = prompt('Enter new text');
        fetch('http://localhost:8083/api/examples/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id,
                exampleText
            }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getExamples();
            });
    }
    // if(!token) {
    //     return <Login setToken={setToken}/>
    // }
    return (

        <div>


            {/*<table>*/}
            {/*  <thead>*/}
            {/*    <tr>*/}
            {/*      <th>Id</th>*/}
            {/*      <th>Text</th>*/}
            {/*    </tr>*/}
            {/*  </thead>*/}
            {/*  <tbody>*/}
            {/*    {JSON.parse(examples).map(item =>*/}
            {/*      <tr>*/}
            {/*        <td>{item.id}</td>*/}
            {/*        <td>{item.exampleText}</td>*/}
            {/*      </tr>)}*/}
            {/*  </tbody>*/}
            {/*</table>*/}
            {examples}
            <br />
            <button onClick={createExample}>Add example</button>
            <br />
            <button onClick={deleteExample}>Delete example</button>
            <br />
            <button onClick={updateExample}>Update example</button>
        </div>
    );
}

export default Content;