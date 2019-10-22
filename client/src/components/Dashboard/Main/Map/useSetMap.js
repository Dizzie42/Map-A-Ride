import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-control-geocoder";

export default () => {
  const mapRef = useRef();
  const routeControl = useRef();

  useEffect(() => {
    //map mounting
    mapRef.current = L.map(mapRef.current, {
      center: [0, 0],
      zoom: 1,
      layers: [
        L.tileLayer(
          "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken: process.env.REACT_APP_MAPBOX_TOKEN
          }
        )
      ]
    });

    //route mounting
    let geocoder = L.Control.Geocoder.nominatim();

    routeControl.current = L.Routing.control({
      routeWhileDragging: false,
      routeDragInterval: 0,
      router: L.Routing.mapbox(process.env.REACT_APP_MAPBOX_TOKEN),
      plan: L.Routing.plan([], {
        geocoder: geocoder,
        geocodersClassName: "geocoders-container",
        reverseWaypoints: true,
        addButtonClassName: "add-waypoint-btn"
      })
    }).addTo(mapRef.current);
  }, []);

  return { mapRef, routeControl };
};
