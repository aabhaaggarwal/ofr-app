import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewAllFlatBooking() {
    const [flatBookings,setFlatBookings] =useState([]);

    useEffect(()=>
    {
        axios.get("http://localhost:8080/flatbooking/all").then(resp=>setFlatBookings(resp.data));
    },[]);

    return(
        <div>
        <h2 style={{color:"blue",textAlign:"center"}}>All Products</h2>
        {
        flatBookings.length>0 &&
        <table>
            <thead>
            <tr>
                <th>Booking no</th>
                <th>Booking from</th>
                <th>Booking to</th>
                <th>members</th>
                <th>cost</th>
            </tr>
            </thead>
            <tbody>
            {
            flatBookings.map(f => <tr key={f.bookingNo}>
                <td>{f.bookingNo}</td>
                <td> {f.bookingFrom}</td>
                <td> {f.bookingTo}</td>
                <td> {f.members}</td>
                <td> {f.flat.cost}</td>
                </tr>)
        }
        </tbody>
        </table>
}

    </div>
    )
}

export default ViewAllFlatBooking;