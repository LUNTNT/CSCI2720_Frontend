import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './admin.css'
import AdminLayout from './adminLayout';
import Event from './Event';
import User from './User';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';

const Admin = () => {
    let location = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(true);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <>
            <div className="two-column">
                <div className="firstCol" style={ collapsed ? { width: "5%" } : { width: "15%" }}>
                    <AdminLayout 
                        collapsed={collapsed}
                        toggled={toggled}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapseChange={handleCollapseChange}
                    />
                </div>
                <div className="secondCol" style={ collapsed ? { width: "90%" } : { width: "80%" }}>
                    <div onClick={() => handleToggleSidebar(true)} style={{ marginLeft: "2em" }}>
                        <FaBars />
                    </div>
                    <div className="dashboardWrapper">
                        <h2 className="welcomeAdmin">Welcome, Admin</h2>
                        <div className="tableWrapper">
                            {location.pathname.includes('/event') ? <Event /> : ''}
                            {location.pathname.includes('/user') ? <User /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;