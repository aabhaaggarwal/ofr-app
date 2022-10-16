import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import updatepic from '../assets/upgrade.jpg';
import NavbarLandlord from "../headerfooter/NavbarLandlord";

function UpdateTenant() {
    const [tId, setTId] = useState('');
    const [tUserName, setTUserName] = useState('');
    const [tPassword, setTPassword] = useState('');
    const [tFirstName, setTFirstName] = useState('');
    const [tLastName, setTLastName] = useState('');
    const [tEmail, setTEmail] = useState('');
    const [tAge, setTAge] = useState('');
    const [tGender, setTGender] = useState('');
    const [tMobile, setTMobile] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/tenant/" + id).then(resp => {
            setTId(resp.data.userId);
            setTUserName(resp.data.username);
            setTPassword(resp.data.password);
            setTFirstName(resp.data.firstName);
            setTLastName(resp.data.lastName);
            setTEmail(resp.data.email);
            setTAge(resp.data.age);
            setTGender(resp.data.gender);
            setTMobile(resp.data.mobile);
        });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            userId: tId,
            username: tUserName,
            password: tPassword,
            firstName: tFirstName,
            lastName: tLastName,
            email: tEmail,
            age: tAge,
            gender: tGender,
            mobile: tMobile
        }
        axios.put("http://localhost:8080/tenant/update", payload)
            .then(resp => {
                alert("Tenant Updated with id "+id);
                navigate("/tenant/details/"+id);
            });
    }

    return (
        <div>
            <NavbarLandlord/><br/><br/><br/>
        <div class="container">
            <div class="row">
            <div class="col-md-6 pt-5 ">
                        <img src={updatepic} alt='update img' className="d-block w-100 h-100" />
                    </div>
                <div class="col-md-6 shadow-lg pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                    <h2 class="text-center">Flat365</h2>
                    <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Update Details</p>
                    
                        <div className="form-group">
                            <input type="number" className="form-control" name="lId" id="lId"
                                onChange={(event) => setTId(event.target.value)} value={tId} disabled />
                        </div>
                        <div class="form-group">
                            <input type="text" className="form-control" name="tUserName" id="tUserName" placeholder="Create username"
                                onChange={(event) => setTUserName(event.target.value)} value={tUserName} disabled/>
                        </div>

                        <div class="form-group">
                            <div className="row">
                                <div class="col">

                                    <input type="text" className="form-control" name="tFirstName" id="tFirstName" placeholder="Enter your first name"
                                        onChange={(event) => setTFirstName(event.target.value)} value={tFirstName} />

                                </div>
                                <div class="col">

                                    <input type="text" className="form-control" name="tLastName" id="tLastName" placeholder="Enter your last name"
                                        onChange={(event) => setTLastName(event.target.value)} value={tLastName} />

                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="text" className="form-control" name="tEmail" id="tEmail" placeholder="Enter your email"
                                onChange={(event) => setTEmail(event.target.value)} value={tEmail} />

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="number" className="form-control" name="tAge" id="tAge" placeholder="Enter your age"
                                    onChange={(event) => setTAge(event.target.value)} value={tAge} />

                            </div>
                            <div class="col">
                                <select class="form-control" id="gender"
                                    onChange={(event) => setTGender(event.target.value)} value={tGender}>

                                    <option value="#">Gender</option>
                                    <option value="male">Male</option>
                                    <option vlaue="female">Female</option>
                                    <option vlaue="others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="tel" className="form-control" name="tMobile" id="tMobile" placeholder="Enter phone number"
                                onChange={(event) => setTMobile(event.target.value)} value={tMobile} />

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="tPassword" id="tPassword" placeholder="Create password"
                                    onChange={(event) => setTPassword(event.target.value)} value={tPassword} />

                            </div>
                        </div>
                        <div class="form-group">
                            <button onClick={handleSubmit} className="btn btn-dark btn-block">Update</button>
                        </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}
export default UpdateTenant;


