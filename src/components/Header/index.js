import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';

export default function Header()
{
    return (
       <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Nessneger Blue</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="chat" text="Chat" />
                <Button className="bp3-minimal" icon="inbox" text="Canais" />
            </Navbar.Group>
        </Navbar>
    )
}