import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWotYXJ2bnRoIiwiYSI6ImNsbDNkZDl3YjBicjEzaXBscDF2d213MGUifQ.3REymEz7NRVoqQyO3UAwwg";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [80.2785, 13.0827], 
        zoom: 10,
      });

      setMap(mapInstance);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation([longitude, latitude]);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    };

    if (!map) {
      initializeMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  useEffect(() => {
    if (map && userLocation) {
      map.flyTo({ center: userLocation, zoom: 14 });
    }
  }, [map, userLocation]);

  useEffect(() => {
    if (map) {
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric", 
        profile: "mapbox/driving", 
      });

      map.addControl(directions, "top-left");
    }
  }, [map]);

  return (
  <>
  <style>
        {`
          body {
            display:block;
            margin-top:1px;
            background-color:white;
            /* Add more styles here */
          }
        {/* `}
      </style> 
  <div id="map" style={{ width: "100%", height: "100vh" }} />
  </>);
};

export default Map;
