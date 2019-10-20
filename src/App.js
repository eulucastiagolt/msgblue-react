import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Login';
import './style.css';

function App() {

    const [token, setToken] = useState('');
    const [login, setLogin] = useState('');

    return (
        <Router>
            { login === '' ? <Redirect to="/login" /> : '' }
            { login === '' ? '' : <Header /> }
            <Switch>
                <Router exact path="/">

                </Router>
                <Route path="/login">
                    { login === '' ? '' : <Redirect to="/" /> }
                    <Login />
                </Route>
                <Router path="/register">

                </Router>
            </Switch>
        </Router>
    );
}

export default App;
