import React, { useState } from 'react';
import {Typography, Button, Row, Col, Icon, Input} from 'antd';
import './style.css';

const { Title, Paragraph } = Typography;

export default function Login()
{

    const [token, setToken] = useState('');

    const url = "https://api.hashify.net/keygen/32";
    const getToken = ()=>{
        fetch(url).then(res => res.json()).then((result)=>{
            setToken(result.KeyHex);
            console.log(token);
        });
    }

    return (
        <>
            <div className='loginContainer'>
                <div className="spaceLogin">
                    <Row>
                        <Col span={16} offset={4}>
                            <Icon type="message" className="loginIcon" theme="outlined" />
                            <Title className="titleLogin" level={2}>Messenger Blue</Title>
                            <Paragraph className="textLogin">
                                Insira um token para inicar um chat em grup ou cria um novo chat
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>
                            <Input placeholder={"Insira o token aqui!"} />
                        </Col>
                    </Row>
                    <Row gutter={[0, 20]}>
                        <Col span={12} offset={6}>
                            <Button type="dashed" className="buttonOpenchat" block>Iniciar chat em grupo</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>
                            <Button type="link" className="buttonNewchat" onClick={getToken} block>Criar novo chat</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}