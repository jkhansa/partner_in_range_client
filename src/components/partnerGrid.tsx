import React from 'react';

interface partnerJSON{
id: string;
organization:string;
website:string;
address:string;
location:string;
coordinates:string;
distance:number;
}


function partnerTableBodyRow(partner:partnerJSON)
{

  let googleMapLink="https://maps.google.com/?q="+partner.coordinates;
  return <tr>
  <td>{partner.organization}</td>
  <td><a href={partner.website} target="_blank" rel="noopener noreferrer">{partner.website}</a></td>
  <td>{partner.address}</td>
  <td>{partner.location}</td>
  <td><a href={googleMapLink} target="_blank" rel="noopener noreferrer">{partner.coordinates}</a></td>
  <td>{partner.distance}</td>
  </tr>;
}

function PartnerGrid(props:any){
const partnerTableBody = props.partners.map((partner:partnerJSON) => partnerTableBodyRow(partner));
    return <div style={{marginTop: 20}}>
    <table className="table table-hover table-bordered">
    <thead>
      <tr>
        <th>Organization</th>
        <th>Website</th>
        <th>Address</th>
        <th>Location</th>
        <th>Coordinates</th>
        <th>Distance</th>
      </tr>
    </thead>
    <tbody>
    {partnerTableBody}
    </tbody>
  </table>
    </div>;
}
export default PartnerGrid;
