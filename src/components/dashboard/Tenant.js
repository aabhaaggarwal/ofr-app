import React from "react";
import NavbarTenant from "../headerfooter/NavbarTenant";

function Tenant() {

    return (
        <div>
            <NavbarTenant />
            <div className="container-fluid">
                <section>
                    <div>

                        <h1 class="text-center">Welcome to Flat365</h1><br></br><br></br>
                    </div>
                    <div class="row" style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-calendar-days fa-5x"></i>

                            </p>
                            <h2 class="text-center font-weight-bold"> My Booking</h2>
                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-magnifying-glass fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold">Search Flat </h2>

                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-file-circle-question fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold"> My Requests</h2>

                        </div><br></br><br></br><br></br>

                    </div><br></br><br></br><br></br>
                    <div>
                        <h4 class="text-muted text-center">HOW TO BOOK</h4>
                        <h1 class="text-center">A Flat in</h1>
                        <h1 class="text-center">3 Simple Steps</h1><br></br><br></br>
                        <div class="row">
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-magnifying-glass fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>01. Search Flat </h5>
                                <p class="text-muted">Begin by searching flats of your choice
                                    by preferred location.
                                </p>


                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-calendar-days fa-3x"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                <h5>02. Make Bookings</h5>
                                <p class="text-muted">Book your favorite flat by giving
                                    basic details.

                                </p>

                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-check-to-slot fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>03. Wait For Approval</h5>
                                <p class="text-muted">Once approved by concerned people,
                                    get settled in your dream home.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-warning">Search Your Flat</button>

                    </div><br></br>




                </section>

            </div>

        </div>
    )

}
export default Tenant;