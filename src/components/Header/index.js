import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css';

const { Header } = Layout;


export default function HeaderPage()
{
    return (
        <>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: "64px" }}>
                    <Menu.Item key="1"><Link to="/chat">Chat</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/chanel">Chanels</Link></Menu.Item>
                </Menu>
            </Header>
        </>
    )
}