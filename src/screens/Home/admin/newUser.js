import React, { useState } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';

const NewUser = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

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
                                    <input type="submit" value="Create"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewUser;