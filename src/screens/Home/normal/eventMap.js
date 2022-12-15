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

    const [venue, setVenue] = useState([]);

    useEffect(()=>{
        fetch(`http://18.209.252.141:13000/venue`)
        .then((res) => res.json())
        .then((data) => {
            setVenue(data)
        })
    }, [])

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

    function Map() {
        const center = useMemo(() => ({ lat: 22.427322578021947, lng: 114.20904766996247 }), []);
        return (
            <div className="w-100 h-100">
                <NormalUserLayout />
                <GoogleMap
                    zoom={15}
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
                
                    {locationList.map(locationList => {
                        return (
                            <Marker
                                key={venue.id}
                                position={{ lat: venue.latitude, lng: venue.longitude }}
                                title={venue.venuee}
                                // onClick={() => {navigate("/dashboard/location/" + locationList.id);}}
                                onClick={() => { setSelectedMarker(venue); }}
                            >
                            </Marker>
                        )
                    })}

                    {/* {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker.coordinate}
                            options={{
                                pixelOffset: new window.google.maps.Size(0, -50),
                            }}
                        >
                            <div>
                                <div>Location: {selectedMarker.location}</div>
                                <br/>
                                <a href={"/dashboard/location/" + selectedMarker.id}>Show events</a>
                            </div>
                        </InfoWindow>
                    )} */}

                </GoogleMap>

            </div>
        )

    }

}

export default EventMap;