import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavbarTenant from '../headerfooter/NavbarTenant';

function RequestBooking() {

    const user = JSON.parse(localStorage.getItem("loginuser"));
    const [bFrom, setBFrom] = useState('');
    const [bTo, setBTo] = useState('');
    const [bMembers, setBMembers] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = () => {
        const payload = {
            bookingFrom: bFrom,
            bookingTo: bTo,
            members: bMembers,
            flatId: id,
            tenantId: user.userId
        }

        axios.post("http://localhost:8080/flatbooking/book", payload).then(resp => {
            alert("FlatRequested for booking");
            navigate("/flatbooking/tenant/" + user.userId);

        }).catch(error=> alert(error.response.data));
    }


    return (
        <div>
        <NavbarTenant/><br/><br/><br/>
        <div class="container">
            <div class="card col-6 mx-auto shadow-lg">
                <div class="card-body">
                    <h4 class="card-title">Book Flat</h4>
                    <p class="card-text">Fill this small form to initiate booking process</p><br />
                    <form>
                        <div class="row">
                            <div class="col">
                                <h6>Booking From</h6>
                                <input type="date" class="form-control" id="bFrom" name="bFrom" value={bFrom} onChange={(event) => setBFrom(event.target.value)} />
                            </div>
                            <div class="col">
                                <h6>Booking To</h6>
                                <input type="date" id="bTo" class="form-control" name="bTo" value={bTo} onChange={(event) => setBTo(event.target.value)} />
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col">
                                <h6>Members</h6>
                            </div>
                            <div class="col">
                                <input type="number" id="bMembers" class="form-control" name="bMembers" value={bMembers} onChange={(event) => setBMembers(event.target.value)} />
                            </div>
                        </div><br />
                    </form>
                    <div class="row">
                        <div class="col">
                            <button type="button" onClick={handleSubmit} class="btn btn-warning">Request Booking</button>
                        </div>
                        <div class="col">
                            <Link to={"/flat/all"} type="button" class="btn btn-danger">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RequestBooking;