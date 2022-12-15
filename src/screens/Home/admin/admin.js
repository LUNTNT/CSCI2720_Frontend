import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './admin.css'
import AdminLayout from './adminLayout';
import Event from './Event';
import User from './User';

const Admin = () => {
    let location = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [screensize, getScreensize] = useState({
        dynamicWidth: window.innerWidth
    });
    const setScreensize = () => {
        getScreensize({
            dynamicWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setScreensize);
        return (() => {
            window.removeEventListener('resize', setScreensize);
        })
    }, [screensize]);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggledSidebar = () => {
        setToggled(!toggled);
    }
    return (
        <>
            <div className="two-column">
                <div className="firstCol" style={ collapsed ? { width: "10%"} : { width : "15%" } }>
                    <AdminLayout 
                        collapsed={collapsed}
                        toggled={toggled}
                        handleToggleSidebar={handleToggledSidebar}
                        handleCollapseChange={handleCollapseChange}
                    />
                </div>
                <div className="secondCol" style={ collapsed ? { width: "90%"} : { width : "80%" } }>
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