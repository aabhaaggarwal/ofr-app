import React from "react";

function Admin() {

    return (
        <div>
            <div className="container-fluid">
                <section>
                    <div class="row" style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col-3 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-users fa-5x"></i>

                            </p>
                            <h2 class="text-center font-weight-bold"> Manage Users</h2>
                        </div>
                        <div class="col-3 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-building-user fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold">Manage Flats</h2>

                        </div>


                    </div>
                    <div class="row"style={{ backgroundColor: "rgb(255, 179, 0)" }}>
                        <div class="col-3 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-solid fa-calendar-days fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold">Manage Bookings</h2>

                        </div>
                        <div class="col-4 mt-5 mb-5">
                            <p class="text-center">
                                <i class="fa-sharp fa-solid fa-house-circle-check fa-5x"></i>
                            </p>
                            <h2 class="text-center font-weight-bold"> Pending Approvals</h2>

                        </div>


                    </div>

                </section>
            </div>
        </div>

    )
}
export default Admin;