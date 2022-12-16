import React from 'react';
import '../../../style.css'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";

const NormalUserFooter = () => {

    return (
        <footer className="text-center footer-color">
            CSCI-2720 Project Group 30 Culture Programme
            <br/>
            <br/>
            Group Members:
            <br/>
            1155141928 Cheuk Chun Lok            
            <br/>
            1155143453 Shek Wui Lun            
            <br/>
            1155142754 Chiu Man Ho
            <br/>
            1155126403 Wong Yu Shing            
            <br/>
            1155143965 Yau Chun Tung              
            <br/>
            1155143076 Yeung Sze Ki
            <br/>
        </footer>

    )
}

export default NormalUserFooter;