// src/LeafletMap.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'

const Map = () => {
    useEffect(() => {
        // Initialize map
        const map = L.map('map').setView([51.7832, -51.5085], 10);

        // // Add tile layer to the map
        var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        OpenStreetMap_Mapnik.addTo(map)

        // var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
        //     minZoom: 0,
        //     maxZoom: 20,
        //     attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        //     ext: 'png'
        // });
        // Stadia_AlidadeSmoothDark.addTo(map)
        // Marker example
        const marker = L.marker([51.7832, -51.5085]).addTo(map);
        marker.bindPopup('A sample popup. Easily customizable.').openPopup();
    }, []); // Empty dependency array ensures that this effect runs once

    return (
        <div id="map" className='map-container'></div>
    );
};

export default Map;

