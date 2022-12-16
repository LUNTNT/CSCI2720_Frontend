import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NormalUserLayout from './normalUserLayout';
import NormalUserFooter from './normalUserFooter';

import '../../../style.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Routes, Route, useParams } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useContext, useEffect, useState } from "react";
import { useMemo } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"

const Location = () => {
    const { id } = useParams()
    const [favourite, setFavourite] = useState(false)
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [comment, setComment] = useState("")

    const [venue, setVenue] = useState([]);
    const [eventList, setEventList] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [favouriteList, setFavoriteList] = useState([]);

    const [uID, setUID] = useState("")
    const navigate = useNavigate()

    const [marker, setMarker] = useState({lat: 0, lng: 0});
    // const [coordinate, setCoordinate] = useState
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyABIKgNc0JoZpd9QgYlVQ9hudOk90uN1Wk",
    });

    const handleCloseCommentBox = () => setShowCommentBox(false);
    const handleShowCommentBox = () => setShowCommentBox(true);

    useEffect(() => {
        setUID(localStorage.getItem('userid'))
    }, [])

    const handleSubmitComment = () => {
        // const jwt = localStorage.getItem('jwt')
        console.log(comment)
        var body = new URLSearchParams()
        body.append("content", comment)

        fetch(`http://18.209.252.141:13000/comment/${uID}/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body
        })
        .then((res) => {
            console.log(res)
        })
        // if (data.ok) {
        // }
        // refresh page
        // window.location.reload(false)
        navigate('/dashboard', {replace: true})

        handleCloseCommentBox();
    }

    /**
     *  Start of Favourite 
     */

    const handleAddFavourite = () => {
        fetch(`http://18.209.252.141:13000/user/favouriteVenues/${uID}/${id}`, {
            method: 'POST',
            mode: 'cors'
        })
        .then((res) => {
            setFavourite(true)
        })
    }

    const handleDeleteFavourite = () => {
        fetch(`http://18.209.252.141:13000/user/favouriteVenues/${uID}/${id}`, {
            method: 'DELETE',
            mode: 'cors'
        })
        .then((res) => {
            setFavourite(false)
        })
    }

    /**
     *  End of Favourite
     */

    // get venue namess
    useEffect(() => {
        fetch(`http://18.209.252.141:13000/venue/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setVenue(data)
                setMarker({lat: parseFloat(data.coordinate.lat), lng: parseFloat(data.coordinate.lng)})
                console.log(venue)

            })

    }, [])

    // get all event based on venue
    useEffect(() => {
        fetch(`http://18.209.252.141:13000/event/venue/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setEventList(data)
                console.log(eventList)
            })
    }, [])

    // get all comments based on venue 
    useEffect(() => {

        fetch(`http://18.209.252.141:13000/comment/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCommentList(data)
                console.log(commentList)
            })
    }, [])

    // get all favourites based on user
    useEffect(() => {
        var uid = localStorage.getItem('userid')
        fetch(`http://18.209.252.141:13000/user/favouriteVenues/${uid}`)
        .then((res) => res.json())
        .then((data) => {
            for (var i = 0; i < data[0].favouriteVenues.length; i++) {
                if (data[0].favouriteVenues[i].id == id) {
                    setFavourite(true)
                }
            }
        })
    }, [])

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
            <NormalUserLayout />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm col-xl-6 p-4'>
                        <a href={"/dashboard"} className="text-body pb-2" style={{ color: 'black' }}>
                            &laquo; Back
                        </a>

                        <div className='pb-2'>

                            <span style={{ display: 'inline-block', fontSize: 30 }}>
                                {venue.venuee}
                            </span>


                            {   favourite 
                                ? <button className="btn btn-block" onClick={handleDeleteFavourite}><AiFillHeart style={{ width: "35", height: "35", color: "red" }}/></button>
                                : <button className="btn btn-block" onClick={handleAddFavourite}><AiOutlineHeart style={{ width: "35", height: "35" }}/></button>
                            }
                            {/*{favorite
                                ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /></svg>
                            }*/}

                            <button type='button' className="btn btn-block " onClick={handleShowCommentBox}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" /></svg>
                            </button>

                        </div>

                        <Tabs defaultActiveKey="event" id="location-info" className="mb-3">
                            <Tab eventKey="event" title="Events" >
                                <Accordion className='my-2'>
                                    {eventList
                                        .map((item, index) => {
                                            return (
                                                <Accordion.Item eventKey={index}>
                                                    <Accordion.Header >
                                                        {item.titlee}
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            Date: {item.predateE}
                                                            <br/>
                                                            Price: {item.pricee}
                                                            <br/>
                                                            Description: {item.desce} 
                                                            <br />
                                                            URL: {item.urle}
                                                            <br/>
                                                            Remarks: {item.remarke}
                                                            <br/>
                                                            Enquiry: {item.enquiry}
                                                            <br/>
                                                            {item.presenterorge}                                             
                                                        </div>
                                    
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })
                                    }
                                </Accordion>
                            </Tab>
                            <Tab eventKey="comment" title="Comment">
                                <Accordion className='my-2'>
                                    {commentList
                                        .map((item, index) => {
                                            return (
                                                <Accordion.Item eventKey={index}>
                                                    <Accordion.Header >
                                                        {item.content}
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            By: {item.user.username}
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })
                                    }
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className='col-xl-6 p-4'>
                        <GoogleMap
                            zoom={15}
                            center={marker}
                            mapContainerClassName="map-container"
                            className="w-100 h-100"
                            options={{
                                zoomControl: false,
                                streetViewControl: false,
                                mapTypeControl: false,
                                fullscreenControl: false,
                            }}
                        >
                            <Marker
                                key={venue.id}
                                position={marker}
                            >
                            </Marker>

                            <InfoWindow
                                position={marker}
                                options={{
                                    pixelOffset: new window.google.maps.Size(0, -50),
                                }}
                            >
                                <div>
                                    <div>Location: {venue.venuee} </div>
                                </div>
                            </InfoWindow>

                        </GoogleMap>
                    </div>
                    <div>
                        <Modal show={showCommentBox} onHide={handleCloseCommentBox}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add your Comment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Comment"
                                        aria-label="Comment"
                                        aria-describedby="basic-addon1"
                                        onChange={
                                            (e) => {
                                                setComment(e.target.value)
                                        }}
                                    />
                                </InputGroup>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseCommentBox}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSubmitComment}>
                                    Add Comment
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>


                </div>
            </div>
            <br />
            <NormalUserFooter />
        </div>

    )
}


export default Location;