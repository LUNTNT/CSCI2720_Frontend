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

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <ProSidebar
                collapsed={collapsed}
            >
                <SidebarHeader>
                    {collapsed ? 
                    <Button 
                        className="menuCollapseBtn"
                        onClick={() => setCollapsed(false)}
                    ><AiOutlineMenuUnfold /></Button> : 
                    <Button 
                        className="menuCollapseBtn"
                        onClick={() => setCollapsed(true)}
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
            <Button className="logOutBtn">Logout</Button>
        </>
    )
}

export default AdminLayout;