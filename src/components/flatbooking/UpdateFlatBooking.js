import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavbarAdmin from '../headerfooter/NavbarAdmin';

function UpdateFlatBooking() {

    const [bNo, setBNo] = useState('');
    const [bFrom, setBFrom] = useState('');
    const [bTo, setBTo] = useState('');
    const [bMembers, setBMembers] = useState('');
    const [bFlatId, setBFlatId] = useState('');
    const [bTenantId, setBTenantId] = useState('');
    const[bStatus,setBStatus] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/flatbooking/"+id).then(resp => {
            setBNo(resp.data.bookingNo);
            setBFrom(resp.data.bookingFrom);
            setBTo(resp.data.bookingTo);
            setBMembers(resp.data.members);
            setBFlatId(resp.data.flat.flatId);
            setBTenantId(resp.data.tenant.userId);
            setBStatus(resp.data.status);
        });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            bookingNo: bNo,
            bookingFrom: bFrom,
            bookingTo: bTo,
            members: bMembers,
            flatId: bFlatId,
            tenantId: bTenantId,
            status:bStatus
        }
        axios.put("http://localhost:8080/flatbooking/update", payload).then(resp => {
            alert("FlatBooking updated");
            navigate("/flatbooking/all");
     } );
    }
    return (
      <div class="row">
      <NavbarAdmin/>
      <div class="col-9">
        <br/><br/><br/>
        <div class="container">
        <div class="card mx-auto shadow-lg">
            <div class="card-body">
              <h4 class="card-title">Update Booking Details</h4>
              <form>
                <div class="row">
                  <div class="col">
                    <h6>Booking From</h6>
                    <input type="date" class="form-control" id="bFrom" name="bFrom" value={bFrom} onChange={(event) => setBFrom(event.target.value)}/>
                  </div>
                  <div class="col">
                    <h6>Booking To</h6>
                    <input type="date" class="form-control" id="bTo" name="bTo" value={bTo} onChange={(event) => setBTo(event.target.value)}/>
                  </div>
                </div><br/>
                <div class="row">
                    <div class="col">
                        <h6>Members</h6>
                    </div>
                    <div class="col">
                      <input type="number" class="form-control" id="bMembers" name="bMembers" value={bMembers} onChange={(event) => setBMembers(event.target.value)}/>
                    </div>
                  </div><br/>
              </form>
              <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-warning" onClick={handleSubmit}>Update</button>
                </div>
                <div class="col">
                    <Link to="/flatbooking/all" type="button" class="btn btn-danger">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
    </div>
    )


}

export default UpdateFlatBooking;