import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import flatimg  from '../assets/15400_Apartments_for_rent_in_Dubai_Marina_20151215122124.jpg';

function ViewFlatById() {
    const [flat, setFlat] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/flat/" + id).then(resp => setFlat(resp.data));
    }, [id]);
    return (
        <div>
            {
                flat !== null &&
                <div class="container m-5 p-5 bg-light border border-warning">
                    <div class="row">

                        <div class="col-sm-6">
                            <img src={flatimg} class="d-block w-100 h-100" />
                        </div>
                        <div class="col-sm-6">
                            <div class="card-body bg-light">
                                <h4 class="card-title text-center">Flat Details</h4><hr></hr>
                                <p class="card-text">
                                    <div class="row">
                                        <div class="col">
                                            <h6>Address</h6>
                                            <p>{flat.flatAddress.houseNo}, {flat.flatAddress.building}, {flat.flatAddress.street}, {flat.flatAddress.city}, {flat.flatAddress.state}, {flat.flatAddress.pincode}, {flat.flatAddress.country}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <h6>Cost</h6>
                                            <i class="fa fa-inr" aria-hidden="true"></i><p class="d-inline">{flat.cost}</p>
                                        </div>
                                        <div class="col">
                                            <h6>FlatType</h6>
                                            <i class="fa fa-bed" aria-hidden="true"></i> <p class="d-inline">{flat.flatType}</p>
                                        </div>
                                    </div><br></br>
                                    <div class="row">
                                        <div class="col">
                                            <h6>Availability</h6>
                                            <p>{flat.availability}</p>
                                        </div>
                                        <div class="col">
                                            <h6>Landlord</h6>
                                            <p class="d-inline">{flat.landlord.firstName} {flat.landlord.lastName}</p>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div>
                                    <button className="btn btn-info">Request Booking</button>
                                 </div>
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}
export default ViewFlatById;