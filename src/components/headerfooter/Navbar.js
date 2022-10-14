import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <div class="container-fluid">
        {/* <!--navbar--> */}
        <nav class="navbar navbar-expand-md bg-dark text-white navbar-dark fixed-top">
            {/* <!--logo--> */}
            <a class="navbar-brand" href="#">Flat365</a>

            {/* <!--other menu properties-->
            <!-- Toggler/collapsibe Button --> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* <!-- Navbar links --> */}
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="/login" class="nav-link text-white bg-dark">My Bookings</Link>  
                    </li>
                    <li class="nav-item">
                    <Link to="/login" class="nav-link text-white bg-dark">Post your property</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/login" class="nav-link text-white bg-dark">Login/Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
       
        </div>
    )
}
export default Navbar;