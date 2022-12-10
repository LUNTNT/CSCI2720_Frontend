import React from 'react';
import { Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NormalUserLayout from './normalUserLayout';
import '../../../style.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Location = () => {
    function addToFav(){

    }
    function addComment(){

    }

    return (
        <>
        <NormalUserLayout />
        <Container>
            <div className='row'>
                <div className='col-sm col-lg-8 col-xl-6 p-1 p-lg-3'>
                        <button type='button' className="btn btn-block mx-2" style={{borderRadius:"100%"}}>🔙</button>
                        <h2  style={{display : 'inline-block'}}>大埔圖書館</h2>
                        <button type='button' className="btn btn-block " onClick={addToFav()}>⭐</button>
                        <button type='button' className="btn btn-block " onClick={addComment()}>💬</button>
                    <Tabs defaultActiveKey="event" id="location-info" className="mb-3">
                        <Tab eventKey="event" title="Events" >
                            <Card className='my-2'>
                                <Card.Header>Event Name</Card.Header>
                                <Card.Body>Here is the event</Card.Body>
                            </Card>
                            <Card className='my-2'>
                                <Card.Header>Event Name</Card.Header>
                                <Card.Body>Here is the event</Card.Body>
                            </Card> 
                            <Card className='my-2'>
                                <Card.Header>Event Name</Card.Header>
                                <Card.Body>Here is the event</Card.Body>
                            </Card> 
                            <Card className='my-2'>
                                <Card.Header>Event Name</Card.Header>
                                <Card.Body>Here is the event</Card.Body>
                            </Card> 
                            <Card className='my-2'>
                                <Card.Header>Event Name</Card.Header>
                                <Card.Body>Here is the event</Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="comment" title="Comment">
                            <Card className='my-2'>
                                <Card.Header>Comment</Card.Header>
                                <Card.Body>Here is the Comment</Card.Body>
                            </Card>
                            <Card className='my-2'>
                                <Card.Header>Comment</Card.Header>
                                <Card.Body>Here is the Comment</Card.Body>
                            </Card>
                            <Card className='my-2'>
                                <Card.Header>Comment</Card.Header>
                                <Card.Body>Here is the Comment</Card.Body>
                            </Card>
                            <Card className='my-2'>
                                <Card.Header>Comment</Card.Header>
                                <Card.Body>Here is the Comment</Card.Body>
                            </Card>
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