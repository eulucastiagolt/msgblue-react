import React, { useState } from 'react';
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css';


export default function Header()
{
    const [login, setLogin] = useState('');

    const typeButton = (window.screen.width <= 576) ? "link" : "primary";

    const buttonsPage = (
        <>
            <Link key="1" to="/chat"><Button type={typeButton}>Chat</Button></Link>
            <Link key="2" to="/chanel"><Button type={typeButton}>Chanel</Button></Link>
            <Link key="3" to="/logout"><Button type={typeButton} onClick={()=> setLogin('')}>Logout</Button></Link>
        </>
    );

    const buttonsPageLogin = (
        <Link key="1" to="/login"><Button type={typeButton}>Login</Button></Link>
    );

    console.log(login);

    return (
        <>
            <div className="headerPage">
                <PageHeader
                    onBack={()=>window.history.back()}
                    title="Messenger Blue"
                    ghost={false}
                    extra={login === '' || login === undefined ? buttonsPageLogin : buttonsPage }
                />
            </div>
        </>
    )
}