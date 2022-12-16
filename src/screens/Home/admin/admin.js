// CSCI-2720 Project Group 30 Culture Programme

// Group Members:

// 1155141928 Cheuk Chun Lok            

// 1155143453 Shek Wui Lun            

// 1155142754 Chiu Man Ho

// 1155126403 Wong Yu Shing            

// 1155143965 Yau Chun Tung              

// 1155143076 Yeung Sze Ki

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
        setCollapsed(false)
    };

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
                <div className="tableWrapper" style={{width: "100%"}}>
                    {location.pathname.includes('/event') ? <Event /> : ''}
                    {location.pathname.includes('/user') ? <User /> : ''}
                </div>
            </div>
        </>
    )
}

export default Admin;