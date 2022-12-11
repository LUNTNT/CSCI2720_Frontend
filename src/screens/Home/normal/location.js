import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NormalUserLayout from './normalUserLayout';
import '../../../style.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { locationList } from './locationList';
import {eventList} from './eventList'
import { Routes, Route, useParams } from 'react-router-dom';


const Location = () => {
    function addToFav() {
        
    }
    function addComment() {

    }

    const { id } = useParams()

    return (
        <>
            <NormalUserLayout />
            <Container>
                <div className='row'>
                    <div className='col-sm col-lg-8 col-xl-6 p-1 p-lg-3'>
                        <a href={"/user"} className="text-body text-decoration-none mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg></a>
                        <h2 style={{ display: 'inline-block' }}>
                            {locationList[id - 1].location}
                        </h2>
                        <button type='button' className="btn btn-block " onClick={addToFav()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></button>
                        <button type='button' className="btn btn-block " onClick={addComment()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/></svg></button>
                        <Tabs defaultActiveKey="event" id="location-info" className="mb-3">
                            <Tab eventKey="event" title="Events" >
                                <Card className='my-2'>
                                    {eventList[id-1].event.map((item, index)=>(<Card.Header>{item}</Card.Header>))}
                                </Card>
                            </Tab>
                            <Tab eventKey="comment" title="Comment">
                                <Card className='my-2'>
                                    <Card.Header>Comment</Card.Header>
                                    <Card.Body>Here is the Comment</Card.Body>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className='col-sm col-lg-8 col-xl-6 p-1 p-lg-3'>
                        <h1>Area for mapContainer</h1>
                    </div>
                </div>

            </Container>

        </>
    )
}


export default Location;