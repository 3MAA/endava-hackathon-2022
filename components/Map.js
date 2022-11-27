import React, { useEffect, useState } from "react";
import { initializeMap } from "../map/initializeMap";
import { Grid } from "@material-ui/core";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

function Map() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Mapa, setMap] = useState();

  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFyaWFlbWlsaWE5ODIzNDc5MyIsImEiOiJjbDg4czdzYm8wMDVsM29vNXdqMnpyZWxkIn0.0MLW-8qKoYn3Y1uA32YDSQ";

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mariaemilia98234793/cl88sdkp7003h14qqb1paoqe1",
      center: [27.587914, 47.158455],
      zoom: 12,
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  return (
    <Grid container id="my-map" style={{ height: 500, width: 1000 }}></Grid>
  );
}

export default Map;
