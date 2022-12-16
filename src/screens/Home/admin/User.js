import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://18.209.252.141:13000/user`)
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
        })
    }, [])

    function deleteUser(id) {
        fetch(`http://18.209.252.141:13000/user/${id}`, {
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
                <h4 class="page-title">Users</h4>
            </Col>
        </Row>

        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col sm="5">
                                <Link to="/admin/newUser"><Button className="addUserBtn">Add User</Button></Link>
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
                                {user
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.username}</td>
                                            <td>{item.password}</td>
                                            <td>
                                                <Link to={'/admin/updateUser/' + item.id}>
                                                    <span className="action">
                                                        <MdEdit />
                                                    </span>
                                                </Link>
                                                &nbsp;
                                                &nbsp;
                                                <span className="action" onClick={ () => deleteUser(item.id) }>
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