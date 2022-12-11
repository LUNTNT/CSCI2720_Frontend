import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './admin.css'
import AdminLayout from './adminLayout';
import Event from './Event';
import User from './User';

const Admin = () => {
    let location = useLocation();

    return (
        <>
            <div className="two-column">
                <div className="firstCol">
                    <AdminLayout />
                </div>
                <div className="secondCol">
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