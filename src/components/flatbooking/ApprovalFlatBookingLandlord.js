import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ApprovalFlatBookingLandlord() {
    const [flatBookings,setFlatBookings] = useState([]);

    const user=JSON.parse(localStorage.getItem("loginuser"));

    useEffect(()=>
    {
        axios.get("http://localhost:8080/flatbooking/landlord/approval").then(resp=>
        setFlatBookings(resp.data));
    },[]);

    return(
<div class="container">
<div class="mb-3 mt-3">
<h4>Pending Approvals</h4>
</div> 
 
{  
        
<table class="table table-striped table-light shadow-lg">
  <thead class="thead-dark">
    <tr>
      <th>Booking No</th>
      <th>Booking From</th>
      <th>Booking To</th>
      <th>Members</th>
      <th>Status</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
    flatBookings?.filter(f => f.flat.landlord.userId ===user.userId).map(f => <tr key={f.bookingNo}>
        <td>{f.bookingNo}</td>
        <td>{f.bookingFrom}</td>
        <td>{f.bookingTo}</td>
        <td>{f.members}</td>
        <td>{f.status}</td>
        <td><Link to={`/flatbooking/approval/landlord/${f.bookingNo}`}><button type="button" class="btn btn-outline-dark">Check Details</button></Link></td>
      </tr>)
}
  </tbody>
</table>
}
</div>
     )
}

export default ApprovalFlatBookingLandlord;