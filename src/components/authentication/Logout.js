import React from 'react';

import{Link, useNavigate} from 'react-router-dom';

 function Logout(){

    const navigate= useNavigate();

    const logout=()=>{

        const user=localStorage.getItem("loginuser");

        if(user!==null){

            localStorage.removeItem("loginuser");

            navigate("/");

        }

    }

    return(
<center>
    <div class="container">
        <div class="card mt-5" style={{width: "18rem"}}>
        <div class="card-body">
          <p class="card-text">Are you sure you want to logout ?</p>
          <div class="row">
            <div class="col">
            <button type="button" class="btn btn-warning" onClick={logout}>Logout</button>

            </div>
            <div class="col">
            <Link to={"/"} class="btn btn-danger">Cancel</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
</center>
    )

 }

 export default Logout;