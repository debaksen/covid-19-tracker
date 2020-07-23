import React from "react";
import { Map as LeafLetMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ casesType, countries, center, zoom }) {
  return (
    <div className="map">
      <LeafLetMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Loop through countries and draw circles on screen*/}
        {showDataOnMap(countries, casesType)}
      </LeafLetMap>
    </div>
  );
}

export default Map;
