import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import profile from '../assets/sign-up-concept-illustration_114360-7885.jpg';
import { addAdmin } from "../../service/AdminService";
import Navbar from "../headerfooter/Navbar";
import Footer from "../headerfooter/Footer";

function AddAdmin() {
    const [aId, setAId] = useState('');
    const [aUserName, setAUserName] = useState('');
    const [aPassword, setAPassword] = useState('');
    const [aFirstName, setAFirstName] = useState('');
    const [aLastName, setALastName] = useState('');
    const [aEmail, setAEmail] = useState('');
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
                email: aEmail,
                mobile: aMobile

            }
                addAdmin(payload)
                    .then(resp => {
                        alert("Admin account created");
                        navigate("/login");
                    }).catch(error=> alert(error.response.data));
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
                                onChange={(event) => setAEmail(event.target.value)} value={aEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                            {
                                formErrors.aEmailError && <div style={{ color: "red" }}>{formErrors.aEmailError}</div>
                            }
                        </div>
                        
                        <div class="form-group">

                            <input type="tel" className="form-control" name="lMobile" id="lMobile" placeholder="Enter phone number"
                                onChange={(event) => setAMobile(event.target.value)} value={aMobile} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                            {
                                formErrors.aMobileError && <div style={{ color: "red" }}>{formErrors.aMobileError}</div>
                            }
                        </div>
                        <div class="row form-group">
                            <div class="col">

                                <input type="password" className="form-control" name="lPassword" id="lPassword" placeholder="Create password"
                                    onChange={(event) => setAPassword(event.target.value)} value={aPassword} pattern="[A-Za-z]{3}" />
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
                            <Link to={"/login"} type="button" class="btn btn-link text-primary">Already Have an account? Login
                                Here</Link>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default AddAdmin;
