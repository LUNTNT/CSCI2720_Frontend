import React from 'react';
import '../../../style.css'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NormalUserLayout = () => {
    return (    
        <Navbar expand="lg" className='navbar-color'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav>
                        <Navbar.Text className='text-light m-2'>Welcome,</Navbar.Text>
                        <Button className='btn buttonColor m-2'>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}

export default NormalUserLayout;