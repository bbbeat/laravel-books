import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import BookDetail from '../BookDetail/BookDetail.jsx';
import BookReview from '../BookReview/BookReview.jsx';

export default function App() {

    let { bookId } = useParams();

    const [book, setBook] = useState(null);

    const [success_message, setSuccessMessage] = useState(null);

    const loadData = async () => {
        const response = await fetch(`/api/books/${bookId}`);
        const data = await response.json();

        setBook(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    if (book === null) {
        return <h1>Loading...</h1>
    }

    return (
        <Switch>
            <Route path="/book/:id/review">
<<<<<<< HEAD
                <BookReview id={ bookId } book={ book } setSuccessMessage={ setSuccessMessage } reloadBook={ loadData } />
            </Route>
            <Route path="/book/:id">
                <BookDetail id={ bookId } book={ book } success_message={ success_message } />
=======
                <BookReview id={ bookId } book={ book } setSuccessMessage={ setSuccessMessage}/>
            </Route>
            <Route path="/book/:id">
                <BookDetail id={ bookId } book={ book } success_message={ success_message } />  
>>>>>>> bb8218fb14226e4103e39818ac84b80c814f02cd
            </Route>
        </Switch>
    )
}