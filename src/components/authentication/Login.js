import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../assets/login.jpg';
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = () => {
        const payload = {
            username: username,
            password: password,
            role: role
        }
        axios.post("http://localhost:8080/login", payload)
            .then(resp => {
                //console.log(resp);
                //setMessage('');
                // alert("New Customer");
                localStorage.setItem('loginuser', JSON.stringify(resp.data));
                if (payload.role == 'landlord') {
                    navigate('/landlord/details/' + resp.data.userId);
                }
                if (payload.role == 'tenant') {
                    navigate('/tenant/details/' + resp.data.userId);
                }
            })
            .catch(error => {
                //console.log(error.response.data);
                setMessage(error.response.data);

            });

    }
    return (
        <div className=' page-content page-container m-4 p-4'>
             <div class="padding">
             <div class="container rounded">
             <div class="card border-warning d-flex flex-row">
                <div class="col-md-6">
                    <img src= {login} class="d-block w-100"/>
                </div>
                <div class="col-md-6 shadow-lg">
                    <br></br>
                    <h2 class="text-center card-title">Login</h2>
                    {
                        message && <h3 style={{ color: "red" }}>{message}</h3>
                    }
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input type="text" className="form-control" name="username" id="username" placeholder="Enter Username"
                            on onChange={(event) => setUsername(event.target.value)} value={username} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password"
                            on onChange={(event) => setPassword(event.target.value)} value={password} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='role'>Role</label>
                        <select class="select form-control" name="role" id="role" onChange={(event) => setRole(event.target.value)} value={role}>
                            <option value="#">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="landlord">Landlord</option>
                            <option value="tenant">Tenant</option>
                        </select>
                    </div>
                    <div class>
                        <button onClick={handleSubmit} className="btn btn-dark btn btn-block">Login</button>
                    </div>
                   
                    <p class=" font-weight-bold text-black-50 btn btn-link" >Forgot password?</p>
                    <br></br>
                    <p class=" font-weight-bold text-black-50  btn btn-link" >Don't Have an Account? Sign In</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                )
            }
export default Login;