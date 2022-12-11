import React from 'react';
import { useContext, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from "react";
import { locationList } from './locationList';
import NormalUserLayout from './normalUserLayout';

const EventMap = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBnVFtiHwLutAF-tfo56eADtLxrTvt4foM",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

    function Map() {
        const center = useMemo(() => ({ lat: 22.427322578021947, lng: 114.20904766996247 }), []);
        return (
            <div className="w-100 h-100">
                <NormalUserLayout />
                <GoogleMap zoom={15} center={center} mapContainerClassName="map-container" className="w-100 h-100">
                    {/* <Marker position={center} /> */}
                    {locationList.map(locationList => {
                        return (
                            <Marker
                                key={locationList.id}
                                position={{ lat: locationList.latitude, lng: locationList.longitude }}
                            >
                            </Marker>
                        )
                    })}
                </GoogleMap>

            </div>
        )

    }

}

export default EventMap;