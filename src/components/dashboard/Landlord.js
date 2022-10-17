import React from "react";

function Landlord() {

    return (
        <div>

            <div className="container-fluid">
                <section>
                    <div>

                        <h1 class="text-center">Welcome to Flat365</h1><br></br><br></br>
                    </div>
                    <div class="row" style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-gears fa-5x"></i>

                            </p>
                            <h2 class="text-center font-weight-bold"> My Properties</h2>
                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-house-medical fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold">Add Flat </h2>

                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-sharp fa-solid fa-house-circle-check fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold"> Pending Approvals</h2>

                        </div><br></br><br></br><br></br>

                    </div><br></br><br></br><br></br>
                    <div>
                        <h4 class="text-muted text-center">HOW TO POST</h4>
                        <h1 class="text-center">Post Your Property in</h1>
                        <h1 class="text-center">3 Simple Steps</h1><br></br><br></br>
                        <div class="row">
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-circle-info fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>01. Add details of your property</h5>
                                <p class="text-muted">Begin by telling us the few basic details about your
                                    property like your property type, location and number of rooms etc.
                                </p>


                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-images fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>02. Upload Photos & Videos</h5>
                                <p class="text-muted">Upload photos and videos of your property either
                                    via your desktop device or from your mobile phone.

                                </p>

                            </div>
                            <div class="col-4 p-5">
                                <p class="badge badge-pill badge-warning">&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-indian-rupee-sign fa-3x"></i>&nbsp;&nbsp;&nbsp;</p>
                                <h5>03. Add Pricing & Ownership</h5>
                                <p class="text-muted">Just update your properties ownership details and
                                    your price and your property is ready for posting.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-warning">Begin To Post Your Property</button>

                    </div><br></br>




                </section>

            </div>

        </div>
    )

}
export default Landlord;