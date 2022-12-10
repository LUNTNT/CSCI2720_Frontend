import React from 'react';
import { useContext, useEffect, useState } from "react";
import './normalPage.css'
import NormalUserLayout from './normalUserLayout';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { list } from './programmeList'

const NormalUser = () => {

    const [programmes, setProgrammes] = useState(list);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState("Asc")

    const sort = (column) => {
        if (order === "Asc") {
            const sorted = list.sort((a, b) => {
                return a[column] > b[column] ? 1 : -1
            })
            setProgrammes(sorted)
            setOrder("Dsc")
        }

        if (order === "Dsc") {
            const sorted = list.sort((a, b) => {
                return a[column] < b[column] ? 1 : -1
            })
            setProgrammes(sorted)
            setOrder("Asc")
        }
    }

    return (
        <div>
            <NormalUserLayout />
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='page-title-box'>
                            <div className='row mb-2'>
                                <div className='col-sm-5'>
                                    <div className='page-title'>Location List</div>
                                </div>
                                <div className='col-sm-7'>
                                    <div className='page-title-right page-title'>
                                        <button type="button" class="btn btn-light mb-2 me-1">Show Events on Map</button>
                                    </div>    
                                </div>
                            </div>
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
                                                <th className="text-body">No.</th>
                                                <th className="text-body">Location</th>
                                                <th className="text-body" style={{cursor: "pointer"}} onClick={() => sort("noofevent")}>Number of Events</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list
                                                .filter((item) => {
                                                    return search.toLowerCase() === ''
                                                        ? item
                                                        : item.location.toLowerCase().includes(search);
                                                })
                                                .map((item, index) => (
                                                    <tr key={index}>
                                                        <td width="10%" className="text-body">{item.id}</td>
                                                        <td width="45%">
                                                            <p className="m-0 d-inline-block align-middle font-16">
                                                                <a href="/location:id" className="text-body text-decoration-none">{item.location}</a>
                                                            </p>
                                                        </td>
                                                        <td width="45%" className="text-body">{item.noofevent}</td>
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

        </div>

    )

}

export default NormalUser;