import React, { useState } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';
import Button from 'react-bootstrap/Button';

const NewUser = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
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
        .then((res) => {
            document.getElementById('notiPanel').innerHTML = 'Created';
        })
    }

    return (
        <>
            <div className="two-column">
                <div className="firstCol" style={ collapsed ? { width: "10%"} : { width : "15%" } }>
                    <AdminLayout 
                        collapsed={collapsed}
                        handleCollapseChange={handleCollapseChange}
                    />
                </div>
                <div className="secondCol" style={ collapsed ? { width: "80%"} : { width : "70%" } }>
                    <div className="dashboardWrapper">
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
                </div>
            </div>
        </>
    )
}

export default NewUser;