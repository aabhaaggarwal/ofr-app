import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import profile from '../assets/sign-up-concept-illustration_114360-7885.jpg';
import { addAdmin } from "../../service/AdminService";

function AddAdmin() {
    const [aId, setAId] = useState('');
    const [aUserName, setAUserName] = useState('');
    const [aPassword, setAPassword] = useState('');
    const [aFirstName, setAFirstName] = useState('');
    const [aLastName, setALastName] = useState('');
    const [aEmail, setAEmail] = useState('');
    const [aRole, setARole] = useState('');
    const [aMobile, setAMobile] = useState('');

    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = () => {

        let errors = {};
        if (!aUserName) {
            errors['aUserNameError'] = "UserName name is required."
        }
        if (!aPassword) {
            errors['aPasswordError'] = "Password is required."
        }
        if (!aFirstName) {
            errors['aFirstNameError'] = "First name is required."
        }
        if (!aLastName) {
            errors['aLastNameError'] = "Last name is required."
        }
        if (!aRole) {
            errors['lRoleError'] = "Role is required."
        }
       
        if (!aEmail) {
            errors['aEmailError'] = "Email is required."
        }
        
        if (aMobile < 10) {
            errors['aMobileError'] = "Please enter valid number!!"
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {
                username: aUserName,
                password: aPassword,
                firstName: aFirstName,
                lastName: aLastName,
                role: aRole,
                email: aEmail,
                mobile: aMobile

            }
            if (aRole == 'admin') {
                addAdmin(payload)
                    .then(resp => {
                        alert("Admin added" + resp.data.userId);
                        //navigate("/landlord/all");
                    });
            }
        }

    }

    return (

        <div class="container-fluid">

            <nav class="navbar navbar-expand-md bg-dark text-white navbar-dark fixed-top">

                <a class="navbar-brand" href="#">Flat365</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white bg-dark" href="#">My Bookings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white bg-dark" href="#">Post your property</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white bg-dark" href="#" id="navbardrop"
                                data-toggle="dropdown">
                                Login/Register
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item bg-light" href="#">For Tenant</a>
                                <a class="dropdown-item bg-light" href="#">For Landlord</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 pt-5 ">
                        <img src={profile} alt='profile img' className="d-block w-100 h-100" />
                    </div>
                    <div class="col-md-6 shadow-lg pb-5" style={{ backgroundColor: "rgba(245, 245, 245)" }}>
                        <h2 class="text-center">Logo</h2>
                        <p class="text-center font-weight-bold text-black-50" style={{ fontSize: "x-large" }}>Create a new
                            account</p>

                        <div class="form-group">

                            <input type="text" className="form-control" name="lUserName" id="lUserName" placeholder="Create username"
                                onChange={(event) => setAUserName(event.target.value)} value={aUserName} />
                            {
                                formErrors.aUserNameError && <div style={{ color: "red" }}>{formErrors.aUserNameError}</div>
                            }
                        </div>
                        <div class="form-group">
                            <div className="row">
                                <div class="col">

                                    <input type="text" className="form-control" name="lFirstName" id="lFirstName" placeholder="Enter your first name"
                                        onChange={(event) => setAFirstName(event.target.value)} value={aFirstName} />
                                    {
                                        formErrors.aFirstNameError && <div style={{ color: "red" }}>{formErrors.aFirstNameError}</div>
                                    }
                                </div>
                                <div class="col">

                                    <input type="text" className="form-control" name="lLastName" id="lLastName" placeholder="Enter your last name"
                                        onChange={(event) => setALastName(event.target.value)} value={aLastName} />
                                    {
                                        formErrors.aLastNameError && <div style={{ color: "red" }}>{formErrors.aLastNameError}</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input type="text" className="form-control" name="lEmail" id="lEmail" placeholder="Enter your email"
                                onChange={(event) => setAEmail(event.target.value)} value={aEmail} />
                            {
                                formErrors.aEmailError && <div style={{ color: "red" }}>{formErrors.aEmailError}</div>
                            }
                        </div>
                        
                        <div class="form-group">

                            <input type="tel" className="form-control" name="lMobile" id="lMobile" placeholder="Enter phone number"
                                onChange={(event) => setAMobile(event.target.value)} value={aMobile} />
                            {
                                formErrors.aMobileError && <div style={{ color: "red" }}>{formErrors.aMobileError}</div>
                            }
                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="lPassword" id="lPassword" placeholder="Create password"
                                    onChange={(event) => setAPassword(event.target.value)} value={aPassword} />
                                {
                                    formErrors.aPasswordError && <div style={{ color: "red" }}>{formErrors.aPasswordError}</div>
                                }
                            </div>
                            </div>
                        <br></br>
                        <div class="form-group">
                            <button onClick={handleSubmit} className="btn btn-dark btn-block">Submit</button>
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-link text-primary">Already Have an account? Login
                                Here</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default AddAdmin;
