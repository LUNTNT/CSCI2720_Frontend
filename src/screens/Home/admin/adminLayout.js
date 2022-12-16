import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './admin.css';
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
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
            localStorage.removeItem('myToken')            
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
                        <Menu iconShape="circle">
                            <MenuItem icon={<RiCalendarEventFill style={{ color: "#000", fontSize: "1.3em" }} />}>
                                <Link to="/admin/event" style={{ fontWeight: "700", fontSize: "1.4em" }}>Event</Link>
                            </MenuItem>
                            <MenuItem icon={ <FaUserCircle style={{ color: "#000", fontSize: "1.3em" }} /> }>
                                <Link to="/admin/user" style={{ fontWeight: "700", fontSize: "1.4em" }}>User</Link>
                            </MenuItem>
                            <MenuItem className="logOutBtn-Menu" icon={ <MdLogout onClick={(e) => { onLogOut() }} style={{ color: "#000", fontSize: "1.3em" }} /> }>
                                <Button className="logOutBtn-Menu" onClick={(e) => { onLogOut() }}>Logout</Button>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
                <Button className="logOutBtn" onClick={(e) => { onLogOut() }}>Logout</Button>
            </>
        )
    }

export default AdminLayout;