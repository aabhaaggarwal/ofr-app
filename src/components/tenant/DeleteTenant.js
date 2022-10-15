import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//import dlt from '../assets/delete.gif';

function DeleteTenant() {
  const [tenant, setTenant] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/tenant/" + id)
      .then((resp) => setTenant(resp.data));
  }, [id]);

  const handleDelete = () => {
    axios.delete("http://localhost:8080/tenant/" + id).then((resp) => {
      alert("Tenant deleted with id: " + id);
      navigate("/tenant/all");
    });
  };
  return (
    <div class="page-content page-container">
      <div class="padding">
        <div class="container rounded">
          <div class="card border-warning d-flex flex-row">
            {/* <div className="col-sm-6">
                            <img src={dlt} alt='profile img' className="d-block w-100 h-100" />
                        </div> */}
            <div class="col-sm-6">
              <div class="card-body bg-light">
                <h4 class="card-title">Delete Tenant</h4>
                <hr />
                {tenant !== null && (
                  <p class="card-text">
                    <div class="row">
                      <div class="col">
                        <h6>UserId:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.userId}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>UserName:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.username}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>FirstName:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.firstName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>LastName:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.lastName}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>Email:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>Role:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.role}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>Age:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.age}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>Gender:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.gender}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>Phone number:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.mobile}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <h6>Password:</h6>
                      </div>
                      <div class="col">
                        <p>{tenant.password}</p>
                      </div>
                    </div>
                    <div>
                      <button onClick={handleDelete} className="btn btn-danger">
                        Delete <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>

                      <a href="#">
                        <button className="btn btn-secondary ">
                          Back{" "}
                          <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        </button>
                      </a>
                    </div>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeleteTenant;