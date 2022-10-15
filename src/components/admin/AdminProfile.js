import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, userParams } from 'react-router-dom';
import image from '../assets/admin.jpg';

function AdminProfile() {

    const [admin, setAdmin] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/admin/" + id).then(resp => setAdmin(resp.data));
    }, [id]);

    return (

        <div className='container bg-light border border-warning m-4'>
            {
                admin !== null &&
                <div className="row">
                    <div className="col-sm-6">
                        <img src={image} alt='profile img' className="d-block w-100 h-100" />
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body bg-light">
                            <h4 className="card-title">Admin Details</h4><hr />
                            <p className="card-text">
                                <div className="row">
                                    <div className="col">
                                        <h6>User Id</h6>
                                    </div>
                                    <div>
                                        <p>{admin.userId}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>User Name</h6>
                                    </div>
                                    <div>
                                        <p>{admin.username}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Password</h6>
                                    </div>
                                    <div>
                                        <p>{admin.password}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>First Name</h6>
                                    </div>
                                    <div>
                                        <p>{admin.firstName}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Last Name</h6>
                                    </div>
                                    <div>
                                        <p>{admin.lastName}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Role</h6>
                                    </div>
                                    <div>
                                        <p>{admin.role}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6>Email</h6>
                                    </div>
                                    <div>
                                        <p>{admin.email}</p>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <h6>Mobile</h6>
                                    </div>
                                    <div>
                                        <p>{admin.mobile}</p>
                                    </div>
                                </div>
                                <br></br>
                                <div class="form-group">
                                    <button className="btn btn-warning">Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default AdminProfile;