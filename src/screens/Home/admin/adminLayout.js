import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './admin.css';
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    SidebarContent,
    Menu,
    MenuItem,
    SidebarHeader
} from 'react-pro-sidebar';
import { useNavigate } from "react-router-dom"


const AdminLayout = ({
    collapsed,
    toggled,
    handleCollapseChange,
    handleToggleSidebar
}) => {
        const navigate = useNavigate()

        const onLogOut = () => {
            console.log("Attempted to log out")
            localStorage.removeItem('username')
            localStorage.removeItem('userid')            
            navigate('/login/admin', { replace: true })
        }
        return (
            <>
                <ProSidebar
                    collapsed={collapsed}
                    toggled={toggled}
                    onToggle={handleToggleSidebar}
                    breakPoint="md"
                >
                    <SidebarHeader>
                        {collapsed ?
                            <Button
                                className="menuCollapseBtn"
                                onClick={handleCollapseChange}
                            ><AiOutlineMenuUnfold /></Button> :
                            <Button
                                className="menuCollapseBtn"
                                onClick={handleCollapseChange}
                            ><AiOutlineMenuFold /></Button>}
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu>
                            <MenuItem>
                                <Link to="/admin/event">Event</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/admin/user">User</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
                <Button className="logOutBtn" onClick={(e) => { onLogOut() }}>Logout</Button>
            </>
        )
    }

export default AdminLayout;