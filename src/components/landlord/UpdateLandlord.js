import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import update from '../assets/upgrade.jpg';
import NavbarLandlord from "../headerfooter/NavbarLandlord";
import { updateLandlord, viewLandlordById } from "../../service/LandlordService";

function UpdateLandlord() {
    const [lId, setLId] = useState('');
    const [lUserName, setLUserName] = useState('');
    const [lPassword, setLPassword] = useState('');
    const [lFirstName, setLFirstName] = useState('');
    const [lLastName, setLLastName] = useState('');
    const [lEmail, setLEmail] = useState('');
    const [lRole, setLRole] = useState('');
    const [lAge, setLAge] = useState('');
    const [lGender, setLGender] = useState('');
    const [lMobile, setLMobile] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        viewLandlordById(id).then(resp => {
            setLId(resp.data.userId);
            setLUserName(resp.data.username);
            setLPassword(resp.data.password);
            setLFirstName(resp.data.firstName);
            setLLastName(resp.data.lastName);
            setLEmail(resp.data.email);
            setLRole(resp.data.role)
            setLAge(resp.data.age);
            setLGender(resp.data.gender);
            setLMobile(resp.data.mobile);
        });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            userId: lId,
            username: lUserName,
            password: lPassword,
            firstName: lFirstName,
            lastName: lLastName,
            email: lEmail,
            role: lRole,
            age: lAge,
            gender: lGender,
            mobile: lMobile
        }
        updateLandlord(payload)
            .then(resp => {
                alert("Landlord Updated with id "+id);
                navigate("/landlord/details/"+id);
            });
    }

    return (
        <div>
            <NavbarLandlord/><br/><br/><br/>
        <div class="container">
            <div class="row">
            <div class="col-md-6 pt-5 ">
                        <img src={update} alt='profile img' className="d-block w-100 h-100" />
                    </div>
                <div class="col-md-6 shadow-lg pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                    <h2 class="text-center">Flat365</h2>
                    <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Update Details</p>
                    
                        <div className="form-group">
                            <input type="number" className="form-control" name="lId" id="lId"
                                onChange={(event) => setLId(event.target.value)} value={lId} disabled />
                        </div>
                        <div class="form-group">
                            <input type="text" className="form-control" name="lUserName" id="lUserName" placeholder="Create username"
                                onChange={(event) => setLUserName(event.target.value)} value={lUserName} disabled/>
                        </div>

                        <div class="form-group">
                            <div className="row">
                                <div class="col">

                                    <input type="text" className="form-control" name="lFirstName" id="lFirstName" placeholder="Enter your first name"
                                        onChange={(event) => setLFirstName(event.target.value)} value={lFirstName} />

                                </div>
                                <div class="col">

                                    <input type="text" className="form-control" name="lLastName" id="lLastName" placeholder="Enter your last name"
                                        onChange={(event) => setLLastName(event.target.value)} value={lLastName} />

                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="text" className="form-control" name="lEmail" id="lEmail" placeholder="Enter your email"
                                onChange={(event) => setLEmail(event.target.value)} value={lEmail} />

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="number" className="form-control" name="lAge" id="lAge" placeholder="Enter your age"
                                    onChange={(event) => setLAge(event.target.value)} value={lAge} />

                            </div>
                            <div class="col">
                                <select class="form-control" id="gender"
                                    onChange={(event) => setLGender(event.target.value)} value={lGender}>

                                    <option value="#">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="tel" className="form-control" name="lMobile" id="lMobile" placeholder="Enter phone number"
                                onChange={(event) => setLMobile(event.target.value)} value={lMobile} />

                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="lPassword" id="lPassword" placeholder="Create password"
                                    onChange={(event) => setLPassword(event.target.value)} value={lPassword} />

                            </div>
                            <div class="col">
                                <select class="form-control" id="role"
                                    onChange={(event) => setLRole(event.target.value)} value={lRole} disabled>

                                    <option value="#">Select type of user</option>
                                    <option value="landlord">Landlord</option>
                                    <option value="tenant">Tenant</option>
                                </select>
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
export default UpdateLandlord;