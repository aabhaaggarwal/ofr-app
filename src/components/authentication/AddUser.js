import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import profile from '../assets/sign-up-concept-illustration_114360-7885.jpg';
import { addLandlord } from "../../service/LandlordService";
import { addTenant } from "../../service/TenantService";
import Navbar from "../headerfooter/Navbar";
import Footer from "../headerfooter/Footer";

function AddUser() {
    const [lUserName, setLUserName] = useState('');
    const [lPassword, setLPassword] = useState('');
    const [lFirstName, setLFirstName] = useState('');
    const [lRole, setLRole] = useState('');
    const [lLastName, setLLastName] = useState('');
    const [lEmail, setLEmail] = useState('');
    const [lAge, setLAge] = useState('');
    const [lGender, setLGender] = useState('');
    const [lMobile, setLMobile] = useState('');

    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = () => {

        let errors = {};
        if (!lUserName) {
            errors['lUserNameError'] = "UserName name is required."
        }
        if (!lPassword) {
            errors['lPasswordError'] = "Password is required."
        }
        if (!lFirstName) {
            errors['lFirstNameError'] = "First name is required."
        }
        if (!lLastName) {
            errors['lLastNameError'] = "Last name is required."
        }
        if (!lRole) {
            errors['lRoleError'] = "Role is required."
        }
        if (!lGender) {
            errors['lGenderError'] = "Gender is required."
        }
        if (!lEmail) {
            errors['lEmailError'] = "Email is required."
        }
        if (!lAge) {
            errors['lAgeError'] = "Age is required."
        }

        if (lMobile < 10) {
            errors['lMobileError'] = "Please enter valid number!!"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                username: lUserName,
                password: lPassword,
                firstName: lFirstName,
                lastName: lLastName,
                role: lRole,
                email: lEmail,
                age: lAge,
                gender: lGender,
                mobile: lMobile

            }
            if (lRole == 'landlord') {
                addLandlord(payload)
                    .then(resp => {
                        alert("Account Created successfully");
                        navigate("/login");
                    }).catch(error=> alert(error.response.data));
            }
            if (lRole == 'tenant') {
                addTenant(payload)
                    .then(resp => {
                        alert("Account Created successfully");
                        navigate("/login");
                    }).catch(error=> alert(error.response.data));
            }
        }

    }

    return (

        <div class="container-fluid">
            <Navbar/>
            <br></br>
            <br></br><br/><br/>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 pt-5 ">
                        <img src={profile} alt='profile img' className="d-block w-100 h-100" />
                    </div>
                    <div class="col-md-6 shadow-lg pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                        <h2 class="text-center"><i class="fa fa-home" aria-hidden="true"></i>Flat365</h2>
                        <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Create a new
                            account</p>

                        <div class="form-group">

                            <input type="text" className="form-control" name="lUserName" id="lUserName" placeholder="Create username"
                                onChange={(event) => setLUserName(event.target.value)} value={lUserName} />
                            {
                                formErrors.lUserNameError && <div style={{ color: "red" }}>{formErrors.lUserNameError}</div>
                            }
                        </div>
                        <div class="form-group">
                            <div className="row">
                                <div class="col">

                                    <input type="text" className="form-control" name="lFirstName" pattern="[A-Za-z]" id="lFirstName" placeholder="Enter your first name"
                                        onChange={(event) => setLFirstName(event.target.value)} value={lFirstName} />
                                    {
                                        formErrors.lFirstNameError && <div style={{ color: "red" }}>{formErrors.lFirstNameError}</div>
                                    }
                                </div>
                                <div class="col">

                                    <input type="text" className="form-control" name="lLastName" pattern="[A-Za-z]" id="lLastName" placeholder="Enter your last name"
                                        onChange={(event) => setLLastName(event.target.value)} value={lLastName} />
                                    {
                                        formErrors.lLastNameError && <div style={{ color: "red" }}>{formErrors.lLastNameError}</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="text" className="form-control" name="lEmail" id="lEmail" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                onChange={(event) => setLEmail(event.target.value)} value={lEmail} />
                            {
                                formErrors.lEmailError && <div style={{ color: "red" }}>{formErrors.lEmailError}</div>
                            }
                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="number" className="form-control" name="lAge" id="lAge"  min="18" placeholder="Enter your age"
                                    onChange={(event) => setLAge(event.target.value)} value={lAge} />
                                {
                                    formErrors.lAgeError && <div style={{ color: "red" }}>{formErrors.lAgeError}</div>
                                }
                            </div>
                            <div class="col">
                                <select class="form-control" id="gender"
                                    onChange={(event) => setLGender(event.target.value)} value={lGender}>

                                    <option value="#">Gender</option>
                                    <option value="male">Male</option>
                                    <option vlaue="female">Female</option>
                                    <option vlaue="others">Others</option>
                                </select>
                                {
                                    formErrors.lGenderError && <div style={{ color: "red" }}>{formErrors.lGenderError}</div>
                                }
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="tel" className="form-control" name="lMobile" pattern="[789][0-9]{9}" id="lMobile" placeholder="Enter phone number"
                                onChange={(event) => setLMobile(event.target.value)} value={lMobile} />
                            {
                                formErrors.lMobileError && <div style={{ color: "red" }}>{formErrors.lMobileError}</div>
                            }
                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="lPassword" id="lPassword" pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" placeholder="Create password"
                                    onChange={(event) => setLPassword(event.target.value)} value={lPassword} />
                                {
                                    formErrors.lPasswordError && <div style={{ color: "red" }}>{formErrors.lPasswordError}</div>
                                }
                            </div>
                            <div class="col">
                                <select class="form-control" id="role"
                                    onChange={(event) => setLRole(event.target.value)} value={lRole}>

                                    <option value="#">Select type of user</option>
                                    <option value="landlord">Landlord</option>
                                    <option value="tenant">Tenant</option>
                                </select>
                                {
                                    formErrors.lRoleError && <div style={{ color: "red" }}>{formErrors.lRoleError}</div>
                                }
                            </div>
                        </div>
                        <br></br>
                        <div class="form-group">
                            <button onClick={handleSubmit} className="btn btn-dark btn-block">Submit</button>
                        </div>
                        <div class="form-group">
                            <Link to={"/login"} class="btn btn-link text-primary">Already Have an account? Login
                                Here</Link>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default AddUser;
