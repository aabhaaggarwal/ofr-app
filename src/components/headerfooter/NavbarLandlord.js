import React from 'react';
import {Link} from 'react-router-dom';


function NavbarLandlord(){
    return(
        <div class="container-fluid">
        <nav class="navbar navbar-expand-md bg-dark text-white navbar-dark fixed-top">
            <a class="navbar-brand" href="#">Flat365</a>

           
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="" class="nav-link text-white bg-dark">My Properties</Link>  
                    </li>
                    <li class="nav-item">
                    <Link to="" class="nav-link text-white bg-dark">Post your property</Link>  
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white bg-dark" href="#" id="navbardrop" data-toggle="dropdown">
                            Profile
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <Link class="dropdown-item bg-light" to="/landlord/details/:id">My Profile</Link>
                            <Link class="dropdown-item bg-light" to="">Pending Approvals</Link>
                            <Link class="dropdown-item bg-light" to="/logout">Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
       
        </div>
    )
}
export default NavbarLandlord;