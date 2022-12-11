import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { eventList } from './EventList';
import { MdDelete } from 'react-icons/md';

const Event = () => {
    function deleteEvent() {

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
                                <Button className="addEventBtn">Add Event</Button>
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
                                {eventList
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ alignItems: "center" }}>{item.title}</td>
                                            <td>{item.venue}</td>
                                            <td>{item.date}</td>
                                            <td>{item.description}</td>
                                            <td>{item.presenter}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <span style={{ cursor: "pointer", color: "grey" }} onClick={ () => deleteEvent('hi') }>
                                                    <MdDelete />
                                                </span>
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