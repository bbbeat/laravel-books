import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Header/Header.jsx';
import BooksListShort from './BooksListShort/BooksListShort.jsx';
import BookOfTheWeek from './BookOfTheWeek/BookOfTheWeek.jsx';
import Login from './Login/Login.jsx';

import './index.scss';

function App() {

    // const [api_token, setApiToken] = useState(localStorage.getItem('api_token'));

    const [user, setUser] = useState(null);

    // const setToken = (token) => {
    //     setApiToken(token);
    //     localStorage.setItem('api_token', token);
    // }

    // const loadCurrentUser = () => {
    //     console.log('loading current user info');
    // const response = await fetch('/api/user', {
    //     header: {
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json',
    //         'Authorization': `Bearer ${api_token}`
    //     }
    // })
    // const data =  await response.json();

    // }

    // usseEffect(() => {
    //     if (api_token) {

    //     }
    // }, [api_token]);

    return (
        <Router>
            <>
                <Header />

                <main>
                    <Switch>

                        <Route exact path="/home">
                            <BooksListShort />
                            <BookOfTheWeek />
                        </Route>

                        <Route path="/home/login">
                            <Login />
                        </Route>

                    </Switch>
                </main>
            </>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
