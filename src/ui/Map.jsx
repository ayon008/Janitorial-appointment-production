'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Map = () => {

    const [map, setMap] = useState(null);
    const [zoom, setZoom] = useState(7);
    const [isShow, setShow] = useState(true);

    const onLoad = (map) => {
        setMap(map);
    }

    const onClick = () => {
        setZoom(19);
        setShow(false);
    }

    const mapStyles = {
        height: '100%',
        width: '100%',
        borderRadius: '10px'
    };
    const [defaultCenter, setDefaultCenter] = useState({
        lat: 23.876356060728043,
        lng: 90.40004099540867,
    });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCLJx7EASIc2pOjiQApyAvo1FyeZcjtBLQ',
    })

    console.log(isLoaded)

    return (
        isLoaded ? (
            <div className='h-full w-full relative rounded-[10px]'>
                <GoogleMap options={{
                    mapTypeControl: false,
                    zoomControl: !isShow,
                    streetViewControl: false,
                    fullscreenControl: false,
                }}
                    mapContainerStyle={mapStyles}
                    zoom={zoom}
                    center={defaultCenter}
                    onLoad={onLoad}
                >
                </GoogleMap>
                {
                    isShow &&
                    <button onClick={() => onClick()} className='btn bg-primary text-white rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none'>Get Direction <FaArrowRight /></button>
                }
            </div>
        )
            :
            <>Loading</>
    );
};

export default Map;