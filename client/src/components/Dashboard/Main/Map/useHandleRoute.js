import { useEffect } from "react";
import "leaflet-routing-machine";
import { updateRoute } from "../../../../utils/actions";

function filterRouteEventObj(wps, routes) {
  const waypoints = Object.values(wps).map(wp => [
    wp.latLng.lat,
    wp.latLng.lng
  ]);
  const totalTime = routes[0].summary.totalTime;
  const totalDistance = routes[0].summary.totalDistance;
  return { waypoints, totalDistance, totalTime };
}

export default (routeControl, routeStore, routeDispatch, coords) => {
  const { createMode } = routeStore;
  const wps = createMode ? [coords, coords] : coords;

  useEffect(() => {
    let c = routeControl.current;
    c.setWaypoints(wps);

    function setRouteData(e) {
      const { waypoints, routes } = e;
      const routeData = filterRouteEventObj(waypoints, routes);
      routeDispatch(updateRoute(routeData));
    }

    c.addEventListener("routesfound", setRouteData);
    return () => c.removeEventListener("routesfound", setRouteData);
  }, [coords]);
};
