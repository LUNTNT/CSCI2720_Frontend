import React, { useState } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';

const NewEvent = () => {
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
                                <h2>New Event</h2>
                                <form action="http://18.209.252.141:13000/event" method="post" id="createForm">
                                    <label for="title">Title:</label><br/>
                                    <input type="text" name="title" id="title" required/><br/>
                                    <label for="venue">Venue ID:</label><br/>
                                    <input type="text" name="venue" id="venue" required/><br/>
                                    <label for="date_time">Date/time:</label><br/>
                                    <input type="text" name="date_time" id="date_time" required/><br/>
                                    <label for="description">Description:</label><br/>
                                    <input type="text" name="description" id="description" required/><br/>
                                    <label for="presenter">Presenter:</label><br/>
                                    <input type="text" name="presenter" id="presenter" required/><br/>
                                    <label for="price">Price:</label><br/>
                                    <input type="text" name="price" id="price" required/><br/>
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

export default NewEvent;