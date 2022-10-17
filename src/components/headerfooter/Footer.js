import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div>
            <footer>
                    <div class=" container-fluid bg-dark text-white pt-4 pb-4 ">
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <h3 class="mb-4">Flat365</h3>
                                    <p> 
                                        Flat365 is India's fastest growing "Managed Home Rental Network" attempting to provide better rental solutions via design & technology.</p>
                                    <p>We help find, book rental homes of choice across Indian cities. We assist with move-in, provide home maintenance services from cleaning, damages to rent payment & even move-out.</p>
                                    <p>Whatever be your budget, whatever you may call a home (a bed, a room or an entire house), we have something for you!</p>
                                    <p></p>
                                </div>
                                <div class="col-4 pt-2">
                                    <h4 class="text-center mb-4">Our Partners
                                        <hr width="50%" size="5" class="ms-5 bg" />
                                    </h4>
                                    <ul style={{ listStyle: "none" }}>
                                        <li class="mb-2">Naukri.com - Jobs in India</li>
                                        <li class="mb-2">Jeevansathi.com - Matrimonials</li>
                                        <li class="mb-2">Shiksha.com - Education Career Info</li>
                                        <li class="mb-2">PaisaBazaar.com</li>
                                        <li class="mb-2">AmbitionBox.com</li>
                                        <li class="mb-2">Policybazaar.com - Insurance India</li>
                                        <li class="mb-2">Meritnation.com - Online Educational Assessment</li>
                                        <li class="mb-2">Jobhai.com – Find Jobs Near You</li>
                                    </ul>
                                </div>
                                <div class="col-4 pt-2">
                                    <h4 class=" mb-4"> &nbsp;&nbsp;&nbsp;&nbsp;Flat365
                                        <hr width="50%" size="5" class="ms-5 bg" />
                                    </h4>
                                    <ul style={{ listStyle: "none" }}>
                                        <li class="mb-2"><a class="text-white" href="#">Home</a></li>
                                        <li class="mb-2"><a class="text-white" href="#">About</a></li>
                                        <li class="mb-2"><a class="text-white" href="#">Contact</a></li>
                                        <li class="mb-2"><a class="text-white" href="#">My Profile</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            
        </div>
    )
}

export default Footer;