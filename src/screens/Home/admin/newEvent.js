import React, { useState } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';

const NewEvent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(true);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
        setCollapsed(false)
    };

    const handleCreateClick = () => {
        var titlee = document.getElementById('title').value;
        var venueid = document.getElementById('venue').value;
        var predateE = document.getElementById('dateTime').value;
        var desce = document.getElementById('description').value;
        var presenterorge = document.getElementById('presenter').value;
        var pricee = document.getElementById('price').value;

        var body = new URLSearchParams();
        body.append("titlee", titlee);
        body.append("venueid", venueid);
        body.append("predateE", predateE);
        body.append("desce", desce);
        body.append("presenterorge", presenterorge);
        body.append("pricee", pricee);
        
        fetch(`http://18.209.252.141:13000/event`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            }
        )
        .then((res) => {
            document.getElementById('notiPanel').innerHTML = 'Created';
        })
    }

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
                <div className="tableWrapper">
                    <div style={{ textAlign: "center" }}>
                        <h2>New Event</h2>
                        <form action="http://18.209.252.141:13000/event" method="post" id="createForm">
                            <label for="title">Title:</label><br/>
                            <input type="text" name="title" id="title" required/><br/>
                            <label for="venue">Venue ID:</label><br/>
                            <input type="text" name="venue" id="venue" required/><br/>
                            <label for="dateTime">Date/time:</label><br/>
                            <input type="text" name="dateTime" id="dateTime" required/><br/>
                            <label for="description">Description:</label><br/>
                            <input type="text" name="description" id="description" required/><br/>
                            <label for="presenter">Presenter:</label><br/>
                            <input type="text" name="presenter" id="presenter" required/><br/>
                            <label for="price">Price:</label><br/>
                            <input type="text" name="price" id="price" required/><br/>
                            <Button
                                className="updateBtn"
                                onClick={handleCreateClick}
                            >
                                Create
                            </Button>
                        </form>
                        <div id="notiPanel"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewEvent;