import React from 'react';
import { useContext, useEffect, useState } from "react";
import './normalPage.css'
import NormalUserLayout from './normalUserLayout';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom"
import NormalUserFooter from './normalUserFooter';

const Dashboard = () => {

    const [programmes, setProgrammes] = useState([]);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState("Asc")
    const [authenticated, setauthenticated] = useState(null);
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://18.209.252.141:13000/venue`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            setProgrammes(data)
        })
    }, [])


    const sort = (column) => {
        if (order === "Asc") {
            const sorted = programmes.sort((a, b) => {
                return a[column] > b[column] ? 1 : -1
            })
            setProgrammes(sorted)
            setOrder("Dsc")
        }

        if (order === "Dsc") {
            const sorted = programmes.sort((a, b) => {
                return a[column] < b[column] ? 1 : -1
            })
            setProgrammes(sorted)
            setOrder("Asc")
        }
    }

    useEffect(() => {
        // token = "authenticated"
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    // uncomment below after backend finished
    // if (!authenticated) {
    //     return <Navigate replace to="/login" />;
    // } else {
        return (
            <div>
                <NormalUserLayout />
                
                <div className='container-fluid'>

                    <div className='row page-title-box'>
                        <div className='page-title col-sm'>
                            Location List
                        </div>
                        <div>
                            <div className='text-body'>
                                Last Updated: 14-12-2022 15:09
                            </div>
                            <div className='page-title-right page-title'>
                                <button type="button" className="btn btn-primary mb-2 me-1" onClick={() => navigate("./favloc")}>Show Favorite Locations</button>
                                <button type="button" className="btn btn-primary mb-2 me-1" onClick={() => navigate("/allevent")}>Show All Events on Map</button>
                            </div>
                        </div>
                    </div>

                    <Form>
                        <InputGroup className='my-3'>
                            <Form.Control
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search Location'
                            />
                        </InputGroup>
                    </Form>

                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='table-responsive'>
                                        <table className="table table-centered w-100 nowrap">
                                            <thead className="table-light">
                                                <tr className="all" style={{ width: "20px" }}>
                                                    {/* <th className="text-body" style={{ cursor: "pointer" }} onClick={() => sort("id")}>No.</th> */}
                                                    <th className="text-body">Location</th>
                                                    <th className="text-body" style={{ cursor: "pointer" }} onClick={() => sort("eventCount")}>Number of Events</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {programmes
                                                    .filter((item) => {
                                                        return search.toLowerCase() === ''
                                                            ? item
                                                            : item.venuee.toLowerCase().includes(search);
                                                    })
                                                    .map((item, index) => (
                                                        <tr key={index}>
                                                            <td width="50%">
                                                                <p className="m-0 d-inline-block align-middle font-16">
                                                                    <a href={"/dashboard/location/" + item.id}  className="text-body" >{item.venuee}</a>
                                                                    {/* <a onClick={() => navigate("./location/" + item.id)} className="text-body text-decoration-none" >{item.location}</a> */}
                                                                </p>
                                                            </td>
                                                            <td width="50%" className="text-body">{item.eventCount}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <NormalUserFooter />
            </div>
        )
    // }

}

export default Dashboard;