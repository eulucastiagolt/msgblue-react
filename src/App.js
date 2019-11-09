import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import Header from './components/Header';
import Login from './pages/Login';
import './style.css';

function App() {

    const login = localStorage.getItem('accesstoken');

    return (
        <Layout className="layout">
            <Router>
                { !login ? <Redirect to="/login" /> : '' }
                { !login ? '' : <Header /> }
                <Switch>
                    <Router exact path="/">
                        
                    </Router>
                    <Route path="/login">
                        { !login ? '' : <Redirect to="/chat" /> }
                        <Login />
                    </Route>
                    <Router path="/logout">
                        {localStorage.removeItem("accesstoken")}
                        <Redirect from="/logout" to="/login" />
                    </Router>
                    <Router path="/chat">

                    </Router>
                    <Router path="/chanel">

                    </Router>
                </Switch>
            </Router>
        </Layout>
    );
}

export default App;
