import React from 'react';
import { MapContainer, TileLayer, Marker, Popup ,Circle,Polyline } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import redIconURL from "./images/marker-icon-2x-red.png";
import blackIconURL from "./images/icons8-marker-50.png";


interface partnerJSON{
id: string;
organization:string;
website:string;
address:string;
location:string;
coordinates:string;
distance:number;
lat:number;
lng:number;
}

const L = require('leaflet');
const redMarker = L.icon({
    iconUrl: redIconURL,
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});

const blackMarker = L.icon({
    iconUrl: blackIconURL,
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});


function generatePartnerMarkers(partner:partnerJSON,lat:number,lng:number)
{
  let partnerPosition: LatLngTuple = [partner.lat, partner.lng];
  let myPosition: LatLngTuple = [lat, lng];
  const purpleOptions = { color: 'purple' };
  let polyline = [
  partnerPosition,
  myPosition,
];

  return <><Marker icon={blackMarker} position={partnerPosition}>
    <Popup>
      {partner.organization} <br /> {partner.address}<br /> {partner.location}
    </Popup>
  </Marker>
  <Polyline pathOptions={purpleOptions} positions={polyline} /></>;
}


function PartnerMap(props:any)
{
  const mapDivStyle = {
    marginTop: "20px",
    marginDown: "20px"
  };

  const partnerMarkers=props.partners.map((partner:partnerJSON) => generatePartnerMarkers(partner,props.lat,props.lng));
  const position: LatLngTuple = [props.lat, props.lng];
    return <div style={mapDivStyle}><MapContainer center={position} zoom={11} scrollWheelZoom={false}  style={{height: '500px'}}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker icon={redMarker} position={position}>
    <Popup>
      My Location
    </Popup>
  </Marker>
  {partnerMarkers}
  <Circle
    center={position}
    pathOptions={{ color: 'green', fillColor: 'green' }}
    radius={props.range*1000}
  />

</MapContainer></div>;
}
export default PartnerMap;
