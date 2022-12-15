import React from 'react';
import '../../../style.css'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";

const NormalUserLayout = () => {
    const jwt = localStorage.getItem('jwt')
    const navigate = useNavigate()

    const [currentUsername, setCurrentUsername] = useState("")

    // useEffect(()=>{
    //     fetch(`http://18.209.252.141:13000/user`)
    //     .then(res => res.text())
    //     .then((data) => {
    //         setCurrentUsername(data)
    //     })
    // }, [])

    const onLogOut = () => {
        console.log("Attempted to log out")
        // localStorage.removeItem('authenticated')
        navigate('/login/user', { replace: true })
    }

    return (
        <Navbar expand="lg" className='navbar-color'>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                    <Nav>
                        <Navbar.Text className='text-light m-2'>Welcome, {currentUsername} </Navbar.Text>
                        <Button className='btn buttonColor m-2' onClick={(e) => { onLogOut() }}>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NormalUserLayout;