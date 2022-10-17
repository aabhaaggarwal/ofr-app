import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import uppic from '../assets/upgrade.jpg';
import NavbarAdmin from "../headerfooter/NavbarAdmin";

function UpdateAdmin() {
    const [aId, setAId] = useState('');
    const [aUserName, setAUserName] = useState('');
    const [aPassword, setAPassword] = useState('');
    const [aFirstName, setAFirstName] = useState('');
    const [aLastName, setALastName] = useState('');
    const [aEmail, setAEmail] = useState('');
    const [aRole, setARole] = useState('');
    const [aMobile, setAMobile] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/admin/" + id).then(resp => {
            setAId(resp.data.userId);
            setAUserName(resp.data.username);
            setAPassword(resp.data.password);
            setAFirstName(resp.data.firstName);
            setALastName(resp.data.lastName);
            setAEmail(resp.data.email);
            setARole(resp.data.role);
            setAMobile(resp.data.mobile);
        });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            userId: aId,
            username: aUserName,
            password: aPassword,
            firstName: aFirstName,
            lastName: aLastName,
            email: aEmail,
            role: aRole,
            mobile: aMobile
        }
        axios.put("http://localhost:8080/admin/update", payload)
            .then(resp => {
                alert("Admin Updated with id " + id);
                navigate("/admin/details/"+id);
            });
    }

    return (
        <div class="row">
        <NavbarAdmin/>
        <div class="col-9">
        <div class="container">
            <div class="row">
                <div class="col-md-6 pt-5 ">
                    <img src={uppic} alt='profile img' className="d-block w-100 h-100" />
                </div>
                <div class="col-md-6 shadow-lg pt-5 pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                    <h2 class="text-center">Flat365</h2>
                    <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Update Details</p>

                    <div className="form-group">
                        <input type="number" className="form-control" name="lId" id="lId"
                            onChange={(event) => setAId(event.target.value)} value={aId} disabled />
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control" name="lUserName" id="lUserName" placeholder="Create username"
                            onChange={(event) => setAUserName(event.target.value)} value={aUserName} disabled />
                    </div>

                    <div class="form-group">
                        <div className="row">
                            <div class="col">

                                <input type="text" className="form-control" name="lFirstName" id="lFirstName" placeholder="Enter your first name"
                                    onChange={(event) => setAFirstName(event.target.value)} value={aFirstName} />

                            </div>
                            <div class="col">

                                <input type="text" className="form-control" name="lLastName" id="lLastName" placeholder="Enter your last name"
                                    onChange={(event) => setALastName(event.target.value)} value={aLastName} />

                            </div>
                        </div>
                    </div>
                    <div class="form-group">

                        <input type="text" className="form-control" name="lEmail" id="lEmail" placeholder="Enter your email"
                            onChange={(event) => setAEmail(event.target.value)} value={aEmail} />

                    </div>
                    <div class="form-group">

                        <input type="tel" className="form-control" name="lMobile" id="lMobile" placeholder="Enter phone number"
                            onChange={(event) => setAMobile(event.target.value)} value={aMobile} />

                    </div>
                    <div class="row form-group">
                        <div class="col">

                            <input type="password" className="form-control" name="lPassword" id="lPassword" placeholder="Create password"
                                onChange={(event) => setAPassword(event.target.value)} value={aPassword} />

                        </div>
                    </div>
                    <div class="form-group">
                        <button onClick={handleSubmit} className="btn btn-dark btn-block">Update</button>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>

    )
}
export default UpdateAdmin;