import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useNavigate } from "react-router-dom";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWotYXJ2bnRoIiwiYSI6ImNsbDNkZDl3YjBicjEzaXBscDF2d213MGUifQ.3REymEz7NRVoqQyO3UAwwg";

const NewMap = () => {
  const [map, setMap] = useState();
  const [userLocation, setUserLocation] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [startingLocation, setStartingLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [80.2785, 13.0827],
        zoom: 10,
      });
      console.log(mapInstance);
      setMap(mapInstance);
      console.log(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([longitude, latitude]);
            
                try {
                  const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
                  );
                  const data = await response.json();
                  const address = data.features[0].place_name;
                  setUserAddress(address);
            
                  // Use the address directly as a waypoint
                  const directions = new MapboxDirections({
                    accessToken: mapboxgl.accessToken,
                    unit: "metric",
                    profile: "mapbox/driving",
                    waypoints: [
                      { address },
                      // Add more waypoints if needed
                    ],
                  });
                  console.log(map);
                  map.addControl(directions, "top-left");

                } catch (error) {
                  console.error("Error getting address:", error);
                }
              },
              (error) => {
                console.error("Error getting location:", error);
              }
        );
      } else {
        // If geolocation is not available, set a default starting location
        setStartingLocation([80.2785, 13.0827]);
        mapInstance.setCenter([80.2785, 13.0827]);
        mapInstance.setZoom(10);
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
        waypoints: [
          { coordinates: startingLocation },
          // Add more waypoints if needed
        ],
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
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1,
          backgroundColor: "#fff",
          padding: "10px 20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </>
  );
};

export default NewMap;
