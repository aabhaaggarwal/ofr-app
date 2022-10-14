import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

 function Login(){
   
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[role,setRole]=useState('');
    const[message,setMessage]=useState('');
    const navigate =useNavigate('');
    
    const handleSubmit=()=>{
        const payload={
            username: username,
            password: password,
            role:role
        }
        axios.post("http://localhost:8080/login", payload)
            .then(resp => {
                //console.log(resp);
                //setMessage('');
                // alert("New Customer");
                localStorage.setItem('loginuser',JSON.stringify(resp.data));
                if(payload.role=='landlord'){
            navigate('/landlord/details/'+resp.data.userId);
                }
                if(payload.role=='tenant'){
                    navigate('/tenant/details/'+resp.data.userId);  
                }
            })
            .catch(error=>{
                //console.log(error.response.data);
                setMessage(error.response.data);

            });

        }
    return(
        <div className='container'>
            <h2>Login</h2>
            {
                message && <h3 style={{color:"red"}}>{message}</h3>
            }
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input type="text" className="form-control" name="username" id="username" placeholder="Enter Username"
                on onChange={(event)=>setUsername(event.target.value)} value={username}/>
            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password"
                on onChange={(event)=>setPassword(event.target.value)} value={password}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type="text" className="form-control" name="role" id="role" placeholder="Enter Role"
                on onChange={(event)=>setRole(event.target.value)} value={role}/>
            </div>
            <div>
                <button onClick={handleSubmit} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
 }
 export default Login;