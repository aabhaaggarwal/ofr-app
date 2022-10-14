import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, userParams } from "react-router-dom";
import proimg from "../assets/profile.png";

function TenantProfile() {
  const [tenant, setTenant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/tenant/" + id).then((resp) => setTenant(resp.data));
  }, [id]);
  return (
    <div className="container bg-light border border-warning">
      {tenant !== null && (
        <div className="row">
          <div className="col-sm-6">
            <img src={proimg} alt="Profile" className="d-block w-100 h-100" />
          </div>
          <div className="col-sm-6">
            <div className="card-body bg-light">
              <h4 className="card-title">Tenant Details</h4>
              <hr />
              <p className="card-text">
                <div className="row">
                  <div className="col">
                    <h6>User Id</h6>
                  </div>
                  <div>
                    <p>{tenant.userId}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>User Name</h6>
                  </div>
                  <div>
                    <p>{tenant.username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Password</h6>
                  </div>
                  <div>
                    <p>{tenant.password}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>First Name</h6>
                  </div>
                  <div>
                    <p>{tenant.firstName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Last Name</h6>
                  </div>
                  <div>
                    <p>{tenant.lastName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Email</h6>
                  </div>
                  <div>
                    <p>{tenant.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Age</h6>
                  </div>
                  <div>
                    <p>{tenant.age}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Gender</h6>
                  </div>
                  <div>
                    <p>{tenant.gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Mobile</h6>
                  </div>
                  <div>
                    <p>{tenant.mobile}</p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TenantProfile;
