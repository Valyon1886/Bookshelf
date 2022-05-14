import React, {Component, Fragment, useEffect, useLayoutEffect, useState} from "react";
import useToken from "./useToken";
import "./all.module.css";
import classes from "./all.module.css";

function Content() {
    const [books, setBooks] = useState(true);
    const {token, setToken} = useToken();

    useLayoutEffect(() => {
        getBooks();
    });

    function getBooks() {
        fetch('https://murmuring-tor-23246.herokuapp.com/api/books/', {
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
        fetch('https://murmuring-tor-23246.herokuapp.com/api/books/', {
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
        fetch(`https://murmuring-tor-23246.herokuapp.com/api/books/${id}`, {
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
        fetch('https://murmuring-tor-23246.herokuapp.com/api/books/', {
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
        fetch('https://murmuring-tor-23246.herokuapp.com/api/books/amount', {
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
        fetch('https://murmuring-tor-23246.herokuapp.com/api/books/amount', {
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
                <table className="table col-md-5 text-center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Book name</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.values(JSON.parse(books)).map(book =>
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.bookName}</td>
                            <td>{book.amount}</td>
                            <td><button className={`btn ${classes.button1}`} onClick={updateAmount.bind(0, book.id, book.bookName, book.amount)}>Take book</button></td>
                            <td><button className={`btn ${classes.button2}`} onClick={updateAmound.bind(0, book.id, book.bookName, book.amount)}>Return book</button></td>
                        </tr>)}
                    </tbody>
                </table>

                <div className={`text-center ${classes.mask}`}>
                    <button className={`btn btn-primary ${classes.mask}`} onClick={createBook}>Add book</button>

                    <button className={`btn btn-primary ${classes.mask}`} onClick={deleteBook}>Delete book</button>

                    <button className={`btn btn-primary ${classes.mask}`} onClick={updateBook}>Update book</button>
                </div>
            </div>

        );

}

export default Content;