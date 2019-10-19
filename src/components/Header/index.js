import React from 'react';
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css';


export default function Header()
{
    let typeButton = (window.screen.width <= 576) ? "link" : "primary";

    return (
        <div className="headerPage">
            <PageHeader
                onBack={()=>window.history.back()}
                title="Messenger Blue"
                ghost={false}
                extra={[
                    <Link key="1" to="/chat"><Button key="1" type={typeButton}>Chat</Button></Link>,
                    <Link key="2" to="/chanel"><Button key="2" type={typeButton}>Chanel</Button></Link>,
                    <Link key="3" to="/login"><Button type={typeButton}>Login</Button></Link>
                ]}
            />
        </div>
    )
}