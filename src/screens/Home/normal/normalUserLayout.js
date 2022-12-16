// CSCI-2720 Project Group 30 Culture Programme

// Group Members:

// 1155141928 Cheuk Chun Lok            

// 1155143453 Shek Wui Lun            

// 1155142754 Chiu Man Ho

// 1155126403 Wong Yu Shing            

// 1155143965 Yau Chun Tung              

// 1155143076 Yeung Sze Ki


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

    useEffect(()=>{
        setCurrentUsername(localStorage.getItem('username'))
    }, [])


    const onLogOut = () => {
        console.log("Attempted to log out")
        localStorage.removeItem('username')
        localStorage.removeItem('userid')
        localStorage.removeItem("myToken")

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