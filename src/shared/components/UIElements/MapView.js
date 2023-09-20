import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

import "./MapView.css";

const MapView = (props) => {

  const mapContainer = useRef();
  const mapRef = useRef();

  maptilersdk.config.apiKey = "NoH96SVdxCPJnDfAaMcu";

  const { center, zoom } = props;

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [center.lng, center.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([center.lng, center.lat])
      .addTo(mapRef.current);
      
  }, [center, zoom]);


  return (
    <div
      ref={mapContainer}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    >
    </div>
  );
};

export default MapView;
