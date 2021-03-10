import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Login.jsx';
import Register from './Register.jsx';

// function App() {

//     const [user, setUser] = useState(null);

//     useEffect(() =>)
// }

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/login" children={ <Login /> } />
            <Route path="/register" children={ <Register /> } />
        </Switch>
    </Router>
), document.querySelector('#app'));