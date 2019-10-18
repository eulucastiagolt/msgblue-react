import React from 'react';
import { PageHeader, Button } from 'antd';
import 'antd/dist/antd.css';


export default function Header()
{
    return (
        <>
            <PageHeader
                onBack={()=>null}
                title="Messenger Blue"
                extra={[
                    <Button type="dashed">Chat</Button>,
                    <Button type="primary" >Chanel</Button>
                ]}
            />
        </>
    )
}