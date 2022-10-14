import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ViewAllLandlord() {

    const [landlords, setLandlords] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/landlord/all").then(resp => setLandlords(resp.data));
    }, []);

    return (
        <div className="container">
            {
                landlords.length > 0 &&

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>UserId</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            landlords.map(l => <tr key={l.userId}>
                                <td>{l.userId}</td>
                                <td>{l.username}</td>
                                <td>{l.password} </td>
                                <td>{l.firstName}</td>
                                <td>{l.lastName}</td>
                                <td> {l.email}</td>
                                <td> {l.age}</td>
                                <td> {l.gender}</td>
                                <td> {l.mobile}</td>
                                <td><Link to={`/landlord/details/${l.userId}`}><i class="fa fa-eye" aria-hidden="true"></i></Link></td>
                                <td><Link to={`/landlord/update/${l.userId}`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link></td>
                                <td><Link to={`/landlord/delete/${l.userId}`}><i class="fa fa-trash" aria-hidden="true"></i></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }

        </div>
    )
}
export default ViewAllLandlord;
