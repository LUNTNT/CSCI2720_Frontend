// CSCI-2720 Project Group 30 Culture Programme

// Group Members:

// 1155141928 Cheuk Chun Lok            

// 1155143453 Shek Wui Lun            

// 1155142754 Chiu Man Ho

// 1155126403 Wong Yu Shing            

// 1155143965 Yau Chun Tung              

// 1155143076 Yeung Sze Ki


import React, { useState } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';

const NewUser = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(true);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
        setCollapsed(false)
    };

    const handleCreateClick = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var userType = document.getElementById('userType').value;

        var body = new URLSearchParams();
        body.append("username", username);
        body.append("password", password);
        body.append("userType", userType);
        
        fetch(`http://18.209.252.141:13000/user`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            }
        )
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('notiPanel').innerHTML = 'Created.';
        })
    }

    return (
        <>
            <div onClick={() => handleToggleSidebar(true)}>
                <FaBars className='menuToggleBtn'/>
            </div>
            <AdminLayout 
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapseChange={handleCollapseChange}
            />
            <div className={`dashboardWrapper ${ collapsed ? "" : "notCollapsed"}`}>
                <h2 className="welcomeAdmin">Welcome, Admin</h2>
                <div className="tableWrapper">
                    <div style={{ textAlign: "center" }}>
                        <h2>New User</h2>
                        <form action="http://18.209.252.141:13000/user" method="post" id="createForm">
                            <label for="username">Username:</label><br/>
                            <input type="text" name="username" id="username" required/><br/>
                            <label for="password">Password:</label><br/>
                            <input type="text" name="password" id="password" required/><br/>
                            <label for="userType">User Type:</label><br />
                            <select name="userType" id="userType" required>
                                <option value="user">User</option>
                                <option value="admin">Admin</option> 
                            </select>
                            
                            <br/>
                            <Button
                                className="updateBtn"
                                onClick={handleCreateClick}
                            >
                            Create
                            </Button>
                        </form>
                        <div id="notiPanel"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewUser;