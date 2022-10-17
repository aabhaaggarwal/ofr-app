import React from 'react';
import {Link} from 'react-router-dom';


function NavbarAdmin(){
    const user=JSON.parse(localStorage.getItem("loginuser"));

    return(
        <div class="col-3">
            {
            <nav class="navbar bg-light" >
                <ul class="nav navbar-nav" style={{height:"590px"}}>
                    <li class="nav-item">
                        <a class="navbar-brand text-black-50"  href="#">Flat365</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand text-black-50" href="#"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black-50" href="#"> Dashboard </a>
                    </li>
                    <li class="nav-item">
                        <Link to={`/admin/details/${user.userId}`} class="nav-link text-black-50"> Profile </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/admin/flat/all"} class="nav-link text-black-50"> Manage Properties</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-black-50" href="#" id="navbardrop"
                            data-toggle="dropdown">
                            Manage Users
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item bg-light" href="#">Landlord</a>
                            <a class="dropdown-item bg-light" href="#">Tenant</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black-50"> Manage Bookings</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-black-50" href="#" id="navbardrop"
                            data-toggle="dropdown">
                           Pending Approvals
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item bg-light" href="#">Flat</a>
                            <a class="dropdown-item bg-light" href="#">FlatBooking</a>
                            
                        </div>
                    </li>
                   
                    <li class="nav-item">
                        <a class="nav-link text-black-50" href="#">  Logout </a>
                    </li>
                </ul>
            </nav>
}
        </div>
    )
}

export default NavbarAdmin;