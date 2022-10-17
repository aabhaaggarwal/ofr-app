import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavbarAdmin from '../headerfooter/NavbarAdmin';



function FlatApproval() {
  const [flats, setFlats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/flat/approval").then(resp => setFlats(resp.data));
  }, []);

  return (
    <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
    <div class="container">
      

      <div class="mb-3 mt-3">

        <h4>FlatApproval</h4>

      </div>
      {

        flats.length>0 &&
        <table class="table table-striped table-light shadow-lg">

          <thead class="thead-dark">

            <tr>
              <th>Flat Id</th>
              <th>FlatType</th>
              <th>Cost</th>
              <th>flatAddress</th>
              <th>status</th>
              <th> </th>
            </tr>
            
          </thead>
          <tbody>
            {
              flats.map(f => <tr key={f.flatId}>

                <td>{f.flatId}</td>
                <td>{f.flatType}</td>
                <td>{f.cost}</td>
                <td>{f.flatAddress.houseNo},{f.flatAddress.city},{f.flatAddress.state}</td>
                <td>{f.status}</td>
                

                <td><Link to={`/flat/approval/${f.flatId}`}><button type="button" class="btn btn-outline-dark">Check Details</button></Link></td>

              </tr>)
            }

          </tbody>

        </table>}

    </div>
    </div>
    </div>

  )

}

export default FlatApproval;

