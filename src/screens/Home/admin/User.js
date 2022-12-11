import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { userList } from './UserList';
import { MdDelete } from 'react-icons/md';

const User = () => {
    function deleteEvent() {

    }

    return (
        <>
        <Row>
            <Col>
                <h4 class="page-title">Users</h4>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col sm="5">
                                <Button className="addEventBtn">Add User</Button>
                            </Col>
                        </Row>
                        <Table responsive width={"100%"}>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.username}</td>
                                            <td>{item.password}</td>
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

export default User;