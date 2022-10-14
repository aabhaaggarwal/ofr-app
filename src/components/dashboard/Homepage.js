import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "../assets/flat2.jpg"
import img2 from "../assets/5.jpg"
import img3 from "../assets/3.jpeg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/card1.jpg"
import img6 from "../assets/card3.jpg"
import img7 from "../assets/card22222.jpg"
import Navbar from "../headerfooter/Navbar";
import NavbarTenant from "../headerfooter/NavbarTenant";
import NavbarLandlord from "../headerfooter/NavbarLandlord";


function Homepage() {

   
    const navbar=()=>{
        const user= JSON.parse(localStorage.getItem("loginuser"));
        const roleinput   = user.getElementById("role");
        if(user==null){
           return <Navbar/>;
        }
        if(user!==null){
            if(roleinput=='tenant'){
                return <NavbarTenant/> ;
            }
            if(roleinput=='landlord'){
                return <NavbarLandlord/>;
            }
        }
    
    }
    return (
        <div>
            <div class="container-fluid">
                <header>
                    {navbar}
                    {/* <nav class="navbar navbar-expand-md bg-dark text-white navbar-dark fixed-top">
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
                    </nav> */}
                    <div class="row justify-content-center ">
                        <div>
                            <div>
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active h-25">
                                            <img src={img1} class="d-block  " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                        <div class="carousel-item h-25">
                                            <img src={img2} class="d-block " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                        <div class="carousel-item h-25">
                                            <img src={img3} class="d-block  " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                        <div class="carousel-item h-25">
                                            <img src={img4} class="d-block " alt="..." style={{height:"460px"}}
                                                width="1260rem" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><br></br>
                        <div>
                            </div><br></br>
                        <div class="text-center">
                            <span class="badge badge-pill badge-danger">
                                <h4><i class="fa fa-home fa-1x" aria-hidden="true"></i>&nbsp;&nbsp;Lets find a home thats
                                    perfect for you</h4>
                            </span>

                        </div>
                    </div>
                </header><br></br><br></br>
                <section>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card " style={{backgroundColor:"rgba(0, 229, 255, 0.345)"}}>

                                <div class="card-body">
                                    <h5 class="card-title">Get 15 days Free stay &nbsp;&nbsp; <i
                                        class="fa-brands fa-squarespace fa-2x"></i></h5>
                                    <p class="card-text">Book a home with Flat365 and get 15 days Free Stay</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card" style={{backgroundColor:"rgba(122, 96, 214, 0.523)"}}>
                                <div class="card-body">
                                    <h5 class="card-title">Zero Deposit Homes &nbsp;&nbsp; <i class="fa fa-life-ring fa-2x"
                                        aria-hidden="true"></i></h5>
                                    <p class="card-text">Applicable on selected houses *TandC apply. Coupon code is not required
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card" style={{backgroundColor:"rgb(78, 242, 45)"}}>
                                <div class="card-body">
                                    <h5 class="card-title">Refer owner and earn Rs 1000 &nbsp;&nbsp; <i
                                        class="fa-solid fa-handshake-simple fa-2x"></i></h5>
                                    <p class="card-text">Refer your previous owner or a friend who owns a house and is looking
                                        for tenants</p>
                                </div>
                            </div>
                        </div>
                    </div><br></br><br></br>
                    <div class="container-fluid" style={{backgroundColor:"rgba(255, 174, 0, 0.918)"}}>
                        <div class="row p-5">
                            <div class="col-2">
                                <h2 class="text-center">Designed For Everyone</h2>
                            </div>
                            <div class="col-1">
                                <h2 class="text-left"></h2>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Homes For Families</h4><br></br>
                                <div class="text-center">
                                    <span ><i
                                        class="fa-solid fa-people-group fa-4x"></i>&nbsp;&nbsp;</span><br></br><br></br>
                                    <p class="text-left">Rent a beautiful house for your family. Choose from flats in societies,
                                        individual apartments, bungalows & villas</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Homes For Friends</h4><br></br>
                                <div class="text-center">
                                    <span ><i class="fa-solid fa-user-group fa-4x"></i>
                                        &nbsp;&nbsp;</span><br></br><br></br>

                                    <p class="text-left">Rent a bachelor friendly house with your friends. Choose from flats in societies, individual apartments, bungalows & villas</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Homes Just For You</h4><br></br>
                                <div class="text-center">
                                    <span ><i class="fa-sharp fa-solid fa-person fa-4x"></i>
                                        &nbsp;&nbsp;</span><br></br><br></br>

                                    <p class="text-left">Rent a shared room or a private room for yourself. Choose from flats in societies or individual apartments</p>
                                </div>
                            </div>
                        </div>
                    </div><br></br><br></br>
                    <div class="p-5">
                        <h2>Recently Added</h2><br></br><br></br>
                        <div class="card-deck">
                            <div class="card" id="card1">
                                <img class="card-img-top" src={img5} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">2-BHK</h5>
                                    <p class="card-text">Price:40000</p>
                                    <p class="card-text"><small class="text-muted">HN-115,Sant Nagar ,Amritsar,Punjab 143001</small></p>
                                    <button class="btn btn-primary">More Details</button>
                                </div>
                            </div>
                            <div class="card" id="card2">
                                <img class="card-img-top" src={img6} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">3-BHK</h5>
                                    <p class="card-text">Price:40000</p>
                                    <p class="card-text"><small class="text-muted">HN-115,Sant Nagar ,Amritsar,Punjab 143001</small></p>
                                    <button class="btn btn-primary">More Details</button>
                                </div>
                            </div>
                            <div class="card" id="card3">
                                <img class="card-img-top" src={img7} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">4-BHK</h5>
                                    <p class="card-text">Price:40000</p>
                                    <p class="card-text"><small class="text-muted">HN-115,Sant Nagar ,Amritsar,Punjab 143001</small></p>
                                    <button class="btn btn-primary">More Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div class=" container-fluid bg-dark text-white pt-4 pb-4 ">
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <h3 class="mb-4">Find Flat</h3>
                                    <p>At Flat365, you can advertise a Home/flat, search for a house, browse through properties,
                                        and keep
                                        yourself updated with the latest news and trends making headlines in the realty sector.
                                    </p>
                                    <p> +91 9876543210</p>
                                    <p>Lawrence Road,Amritsar,Punjab</p>
                                    <p>flat365@gmail.com</p>

                                </div>
                                <div class="col-2 pt-2">
                                    <h4 class="text-center mb-4">Navigation
                                        <hr width="50%" size="5" class="ms-5 bg" />
                                    </h4>

                                    <ul style={{listStyle:"none"}}>

                                        <li class="mb-2"><a class="text-white  " href="#">Home</a></li>

                                        <li class="mb-2"><a class="text-white  " href="#">About</a></li>

                                        <li class="mb-2"><a class="text-white  " href="#">Contact</a></li>

                                        <li class="mb-2"><a class="text-white  " href="#">My Profile</a></li>

                                    </ul>
                                </div>
                                <div class="col-3 pt-2">
                                    <h4 class="text-center mb-4">Search Property
                                        <hr width="50%" size="5" class="ms-5 bg"/>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Homepage;
