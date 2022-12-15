import React, { useState, useEffect }from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { eventList } from './EventList';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Event = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch(`http://18.209.252.141:13000/event`)
        .then((res) => res.json())
        .then((data) => {
            setEvent(data);
        })
    }, [])

    function deleteEvent(id) {
        fetch(`http://18.209.252.141:13000/event/${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            window.location.reload();
        })
    }

    return (
        <>
        <Row>
            <Col>
                <h4 class="page-title">Events</h4>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col sm="5">
                                <Link to="/admin/newEvent"><Button className="addEventBtn">Add Event</Button></Link>
                            </Col>
                        </Row>
                        <Table responsive width={"100%"}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Venue</th>
                                    <th>Date/Time</th>
                                    <th>Description</th>
                                    <th>Presenter</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {event
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div class="table-cell">{item.titlee}</div>
                                            </td>
                                            <td>
                                                <div class="table-cell">{item.venueid.venuee}</div>
                                            </td>
                                            <td>
                                                <div class="table-cell">{item.predateE}</div>
                                            </td>
                                            <td>
                                                <div class="table-cell">{item.desce}</div>
                                            </td>
                                            <td>
                                                <div class="table-cell">{item.presenterorge}</div>
                                            </td>
                                            <td>
                                                <div class="table-cell">{item.pricee}</div>
                                            </td>
                                            <td>
                                                <span style={{ cursor: "pointer", color: "grey" }} onClick={ () => deleteEvent(item.id) }>
                                                    <MdDelete />
                                                </span>
                                                <Link to={'/admin/updateEvent/' + item.id}>
                                                    <span className="action">
                                                        <MdUpdate />
                                                    </span>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>      
    )
}

export default Event;