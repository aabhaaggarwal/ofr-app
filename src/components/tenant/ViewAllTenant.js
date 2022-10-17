import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// viewalltenant
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
                       </tr>)
                }
            </tbody>
        </table>
      }
    </div>
  )
}
export default ViewAllTenant;