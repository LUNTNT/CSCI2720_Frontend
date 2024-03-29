// CSCI-2720 Project Group 30 Culture Programme

// Group Members:

// 1155141928 Cheuk Chun Lok            

// 1155143453 Shek Wui Lun            

// 1155142754 Chiu Man Ho

// 1155126403 Wong Yu Shing            

// 1155143965 Yau Chun Tung              

// 1155143076 Yeung Sze Ki


import React, { useState, useEffect } from 'react';
import './admin.css';
import AdminLayout from './adminLayout';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';

const UpdateEvent = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://18.209.252.141:13000/event/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.titlee);
            document.getElementById('title').value = data.titlee;
            document.getElementById('venue').value = data.venueid.id;
            document.getElementById('dateTime').value = data.predateE;
            document.getElementById('description').value = data.desce;
            document.getElementById('presenter').value = data.presenterorge;
            document.getElementById('price').value = data.pricee;
        })
    }, []);

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(true);

    const handleCollapseChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
        setCollapsed(false)
    };

    const handleUpdateSubmit = () => {
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
        
        fetch(`http://18.209.252.141:13000/event/${id}`,
            {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            }
        )
        .then((res) => {
            document.getElementById('notiPanel').innerHTML = 'Updated';
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
                                className='updateBtn'
                                onClick={handleUpdateSubmit}
                            >
                                Update
                            </Button>
                        </form>
                    </div>
                    <div id="notiPanel"></div>
                </div>
            </div>
        </>
    )
}

export default UpdateEvent;