import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewAllTenant() {

    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/tenant/all").then(resp => setTenants (resp.data));
          },[]);
    
  return (
    <div className="container">
      {
        tenants.length > 0 &&

        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th>UserId</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Email</th>
                <th>Role</th>
                <th>FirstName</th>
                <th>LastName</th>
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
                    tenants.map(t => <tr key={t.userId}>
                        <td>{t.userId}</td>
                        <td>{t.username}</td>
                        <td>{t.password}</td>
                        <td>{t.email}</td>
                        <td>{t.role}</td>
                        <td>{t.firstName}</td>
                        <td>{t.lastName}</td>
                        <td>{t.age}</td>
                        <td>{t.gender}</td>
                        <td>{t.mobile}</td>
                        <td><Link to={`/tenant/details/${t.userId}`} className="btn btn-info">View</Link></td>
                        <td><Link to={`/tenant/update/${t.userId}`} className="btn btn-secondary">Update</Link></td>
                        <td><Link to={`/tenant/delete/${t.userId}`} className="btn btn-danger">Delete</Link></td>
                    </tr>)
                }
            </tbody>
        </table>
      }
    </div>
  )
}
export default ViewAllTenant;