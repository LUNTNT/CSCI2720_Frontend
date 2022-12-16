import React from 'react';
import { useContext, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useMemo } from "react";
import NormalUserLayout from './normalUserLayout';
import { useNavigate } from "react-router-dom"
import "../../../"
import NormalUserFooter from './normalUserFooter';

const EventMap = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyABIKgNc0JoZpd9QgYlVQ9hudOk90uN1Wk",
    });
    const navigate = useNavigate()
    const [selectedMarker, setSelectedMarker] = useState("");
    const center = { lat: 22.282279, lng: 114.161545 }

    const [venue, setVenue] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null);
    // var venueList = []

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };




    useEffect(() => {
        fetch(`http://18.209.252.141:13000/venue`)
            .then((res) => res.json())
            .then((data) => {
                setVenue(data)
                console.log(data)



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
    },[])
    

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div className="w-100 h-100">
            <NormalUserLayout />
            <a href={"/dashboard"} className="text-body pb-2" style={{ color: '#ffffff00' }}>
              &laquo; Back
            </a>
            <GoogleMap
                zoom={11}
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

                {venue.map(({ id, venuee, coordinate}) => {
                    return (
                        <Marker
                            key={id}
                            position={coordinate}
                            title={venuee}
                            // onClick={() => {navigate("/dashboard/location/" + locationList.id);}}
                            onClick={() => { handleActiveMarker(id); }}
                        >
                            {activeMarker === id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                <div>
                                    Location: {venuee}
                                    <br></br>
                                    <a href={"/dashboard/location/" + id}>Show events</a>
                                </div>
                                
                                </InfoWindow>
                                
                            ) : null}
                        </Marker>
                        // <Marker
                        //     key={venue.id}
                        //     position={marker}
                        //     title={venue.venuee}
                        //     // onClick={() => {navigate("/dashboard/location/" + locationList.id);}}
                        //     onClick={() => { setSelectedMarker(venue); }}
                        // >
                        // </Marker>
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
                            <br />
                            <a href={"/dashboard/location/" + selectedMarker.id}>Show events</a>
                        </div>
                    </InfoWindow>
                )} */}

            </GoogleMap>
            <br />
            <NormalUserFooter />
            


        </div>
    )

}

export default EventMap;
