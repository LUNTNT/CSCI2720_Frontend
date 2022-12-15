import React, { useState, useEffect } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const UpdateUser = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://18.209.252.141:13000/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('username').value = data.username;
        })
    }, []);

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

    const handleUpdateSubmit = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var body = new URLSearchParams();
        body.append("username", username);
        body.append("password", password);

        fetch(`http://18.209.252.141:13000/user/${id}`,
            {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            }
        )
        .then((res) => {
            document.getElementById('notiPanel').innerHTML = 'Updated';
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
                <div className="secondCol" style={ collapsed ? { width: "90%"} : { width : "80%" } }>
                    <div className="dashboardWrapper">
                        <h2 className="welcomeAdmin">Welcome, Admin</h2>
                        <div className="tableWrapper">
                            <div style={{ textAlign: "center" }}>
                                <h2>Update User</h2>
                                <form id="createForm">
                                    <label for="username">Username:</label><br/>
                                    <input type="text" name="username" id="username" required/><br/>
                                    <label for="password">Password:</label><br/>
                                    <input type="text" name="password" id="password" required/><br/>
                                    <Button
                                        className='updateBtn'
                                        onClick={handleUpdateSubmit}
                                    >
                                        Update
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

export default UpdateUser;