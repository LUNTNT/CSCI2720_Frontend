import React from 'react';
import { useContext, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useMemo } from "react";
import { locationList } from './locationList';
import NormalUserLayout from './normalUserLayout';
import { useNavigate } from "react-router-dom"

const EventMap = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyABIKgNc0JoZpd9QgYlVQ9hudOk90uN1Wk",
    });
    const navigate = useNavigate()
    const [selectedMarker, setSelectedMarker] = useState("");
    const center = { lat: 0, lng: 0 }

    const [venue, setVenue] = useState([]);
    const [marker, setMarker] = useState([]);
    // var venueList = []

    useEffect(() => {
        fetch(`http://18.209.252.141:13000/venue`)
            .then((res) => res.json())
            .then((data) => {
                setVenue(data)
                console.log(venue)
                // venue.map(data => {
                //     // setMarker([data.coordinate])
                //     // console.log(data.coordinate)
                //     var venueList = []
                //     venueList = data.coordinate
                //     console.log(venueList)
                //     // setMarker([data.coordinate])
                //     // console.log(marker)

                // })

            })
    }, [])
    console.log(marker)

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div className="w-100 h-100">
            <NormalUserLayout />
            <GoogleMap
                zoom={1}
                center={center}
                mapContainerClassName="map-container"
                className="w-100 h-100"
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            >

                {/* {venue.map(venue => {
                    return (
                        <Marker
                            key={venue.id}
                            position={marker}
                            title={venue.venuee}
                            // onClick={() => {navigate("/dashboard/location/" + locationList.id);}}
                            onClick={() => { setSelectedMarker(venue); }}
                        >
                        </Marker>
                    )
                })} */}

                {/* {selectedMarker && (
                    <InfoWindow
                        position={selectedMarker.coordinate}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -50),
                        }}
                    >
                        <div>
                            <div>Location: {selectedMarker.location}</div>
                            <br />
                            <a href={"/dashboard/location/" + selectedMarker.id}>Show events</a>
                        </div>
                    </InfoWindow>
                )} */}

            </GoogleMap>

        </div>
    )

}

export default EventMap;