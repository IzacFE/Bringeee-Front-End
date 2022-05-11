import React from "react";
import { Marker, Tooltip } from "react-leaflet";
import "../../index.css";

function DraggableMarker(props) {
  return (
    <Marker
      draggable={true}
      // eventHandlers={props.eventHandlers}
      onDragend={props.onDragend}
      position={props.position}
      ref={props.markerRef}
    >
      <Tooltip permanent>Tekan dan geser ke lokasi</Tooltip>
    </Marker>
  );
}

export default DraggableMarker;
