import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import axios from "axios";
import flatimg from "../assets/card222.jpg";
import NavbarTenant from "../headerfooter/NavbarTenant";


function ViewAllFlats() {

    const [flats, setFlats] = useState([]);
    const [city, setCity] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8080/flat/search").then(resp => setFlats(resp.data));
    }, []);

    const selectCity = () => {
        axios.get("http://localhost:8080/flat/city/" + city).then(resp => setFlats(resp.data));
    }

    return (
        <div>
        <NavbarTenant/>
        <div>
            {
                <main>
                    {
                        flats.length > 0 &&
                        <div class="container p-5 m-5">
                            <div class="btn btn-warning d-flex justify-content-center">
                                <select class="form-select row col-lg-12" onChange={(event) => setCity(event.target.value)} value={city} >
                                    <option value="#">Select City</option>
                                    <option value="Amritsar">Amritsar</option>
                                    <option value="Jalandar">Pune</option>
                                    <option value="Pune">Mumbai</option>
                                    <option value="Pune">Nagpur</option>
                                </select>
                                
                            </div><br></br><br></br>
                            {
                                city != '' ?
                                    <div>
                                        {
                                            flats.filter(f => f.flatAddress.city === city).map(f => <div class="card-deck" keys={f.flatId}>
                                                <div class="card ">
                                                    <img class="card-img-top " src={flatimg} />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">{f.flatType}</h5>
                                                        <p class="card-text">{f.flatAddress.street},{f.flatAddress.city},{f.flatAddress.state}</p>
                                                        <p class="card-text">Owned By: {f.landlord.firstName} {f.landlord.lastName}</p>
                                                        <Link to={`/flat/details/${f.flatId}`} className="btn btn-primary">More Details</Link>
                                                    </div>
                                                </div><br></br><br></br>

                                            </div>)
                                        }
                                    </div>
                                    : <div>
                                        {
                                            flats.map(f => <div class="card-deck" keys={f.flatId}>
                                                <div class="card ">
                                                    <img class="card-img-top " src={flatimg} />
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">{f.flatType}</h5>
                                                        <p class="card-text">{f.flatAddress.street},{f.flatAddress.city},{f.flatAddress.state}</p>
                                                        <p class="card-text">Owned By: {f.landlord.firstName} {f.landlord.lastName}</p>
                                                        <Link to={`/flat/details/${f.flatId}`} className="btn btn-primary">More Details</Link>
                                                    </div>
                                                </div><br></br><br></br>

                                            </div>)
                                        }
                                    </div>

                            }




                        </div>
                    }
                </main>
            }
        </div>
        </div>
    )


}


export default ViewAllFlats;