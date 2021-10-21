
import React, { useState} from 'react';
import './App.css';
import PartnerGrid from './components/partnerGrid'
import PartnerForm from './components/partnerForm'
import PartnerMap from './components/partnerMap'


import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


function App() {

const [partnerList,setPartners]=useState([]);
const [lat, setLat] = useState(51.5144636);
const [lng, setLng] = useState(-0.142571);
const [range, setRange] = useState(10);

function setMyLat(lat:number)
{
  setLat(lat);
}
function setMyLng(lng:number)
{
  setLng(lng);
}
function setMyRange(range:number)
{
  setRange(range);
}
function setPartnerList(parterList:[])
{
  setPartners(parterList);
}

L.Icon.Default.imagePath='images/';
return (

<div className="container">
  <div className="jumbotron text-center">
  <h1>Partners in Range</h1>
  <PartnerForm  partners={partnerList}
   setpartners={setPartnerList}
   lat={lat}
   lng={lng}
   range={range}
   setLat={setMyLat}
   setRange={setMyRange}
   setLng={setMyLng}
   />
  </div>

  <ul className="nav nav-pills nav-justified">
    <li className="active"><a data-toggle="pill" href="#grid">GRID</a></li>
    <li><a data-toggle="pill" href="#map">MAP</a></li>
  </ul>

  <div className="tab-content">
    <div id="grid" className="tab-pane fade in active">
      <PartnerGrid partners={partnerList} />
    </div>
    <div id="map" className="tab-pane fade">
      <PartnerMap
      partners={partnerList}
      lat={lat}
      lng={lng}
      range={range}
       />
    </div>

  </div>

</div>


  );
}

export default App;
