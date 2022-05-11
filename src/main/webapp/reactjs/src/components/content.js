import React, {Component, Fragment, useEffect, useLayoutEffect, useState} from "react";
import useToken from "./useToken";
import Login from "./Login";
import App from "../App";


function Content() {
    const [books, setBooks] = useState(true);

    const {token, setToken} = useToken();

    useLayoutEffect(() => {
        getBooks();
    });

    let taked = true;

    function getBooks() {
        fetch('http://localhost:8083/api/books/', {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                setBooks(data);
            });
    }

    function createBook() {
        let bookName = prompt('Enter text');
        let amount = prompt('Enter amount');//
        fetch('http://localhost:8083/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({bookName, amount}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBooks();
            });
    }

    function deleteBook() {
        let id = prompt('Enter book ID');
        fetch(`http://localhost:8083/api/books/${id}`, {
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
                getBooks();
            });
    }

    function updateBook() {
        let id = prompt('Enter book ID');
        let bookName = prompt('Enter new text');
        let amount = prompt('Enter new amount');//
        fetch('http://localhost:8083/api/books/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id,
                bookName,
                amount
            }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBooks();
            });
    }



    function updateAmount(id, bookName, amount) {
        // alert(f);
        // alert(id);
        // alert(bookName);
        amount = Number(amount) - 1;
        fetch('http://localhost:8083/api/books/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id,
                bookName,
                amount
            }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                getBooks();
            });
    }

    function updateAmound(id, bookName, amount) {
        // alert(f);
        // alert(id);
        // alert(bookName);
        amount = Number(amount) + 1;
        fetch('http://localhost:8083/api/books/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                id,
                bookName,
                amount
            }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                getBooks();
            });
    }

    // if(!token) {
    //     return <Login setToken={setToken}/>
    // }

    //var booki = (JSON.parse(books));

    //console.log(booki);


        return (

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Text</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.values(JSON.parse(books)).map(book =>
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.bookName}</td>
                            <td>{book.amount}</td>
                            <td><button onClick={updateAmount.bind(0, book.id, book.bookName, book.amount)}>Take book</button></td>
                            <td><button onClick={updateAmound.bind(0, book.id, book.bookName, book.amount)}>Return book</button></td>
                        </tr>)}
                    </tbody>
                </table>

                <br/>
                <button onClick={createBook}>Add book</button>
                <br/>
                <button onClick={deleteBook}>Delete book</button>
                <br/>
                <button onClick={updateBook}>Update book</button>
            </div>
        );

}

export default Content;