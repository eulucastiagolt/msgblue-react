import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Login';

function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Router exact path="/">

                </Router>
                <Route path="/login">
                    <Login />
                </Route>
                <Router path="/register">

                </Router>
            </Switch>
        </Router>
    );
}

export default App;
