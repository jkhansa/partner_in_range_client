import {getPartnersInRange} from '../api/partners'
import React from 'react';


function PartnerForm(props:any){
  //const [lat, setLat] = useState(51.5144636);
  //const [lng, setLng] = useState(-0.142571);
  //const [range, setRange] = useState(10);
  //const [partnerList,setPartners]=useState([]);
  const handleSubmit = (event:any) => {
    event.preventDefault();
    getPartnersInRange(props.range,props.lat,props.lng).then(data=>props.setpartners(data));

  }
  return <form onSubmit={handleSubmit} className="form-inline" id='range_form' action="/action_page.php">
    <div className="form-group">
      <label htmlFor="lat">Latitude:</label>
      <input type="number" className="form-control" id="lat"

      value={props.lat}
      onChange={(e) => props.setLat(parseFloat(e.target.value))}
      />
    </div>
    <div className="form-group">
      <label htmlFor="lng">Longitude:</label>
      <input type="number" className="form-control" id="lng"
      value={props.lng}
      onChange={(e) => props.setLng(parseFloat(e.target.value))}
      />
    </div>
    <div className="form-group">
      <label htmlFor="range">Range:</label>
      <input type="number" className="form-control" id="range"
      value={props.range}
      onChange={(e) => props.setRange(parseFloat(e.target.value))}
      />
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form> ;
}

export default PartnerForm;
