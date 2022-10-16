import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import updatepic from '../assets/upgrade.jpg';

function UpdateTenant() {
  const [tUsername, setTUserName] = useState(" ");
  const [tPassword, setTPassword] = useState(" ");
  const [tEmail, setTEmail] = useState(" ");
  const [tFirstName, setTFirstName] = useState(" ");
  const [tLastName, setTLastName] = useState(" ");
  const [tAge, setTAge] = useState(" ");
  const [tGender, setTGender] = useState(" ");
  const [tMobile, setTMobile] = useState(" ");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/tenant/" + id).then((resp) => {
      setTUserName(resp.data.username);
      setTPassword(resp.data.password);
      setTEmail(resp.data.email);
      setTFirstName(resp.data.firstName);
      setTLastName(resp.data.lasttName);
      setTAge(resp.data.age);
      setTGender(resp.data.gender);
      setTMobile(resp.data.mobile);
    });
  }, [id]);

  const handleSubmit = () => {
    const payload = {
      username: tUsername,
      password: tPassword,
      email: tEmail,
      firstName: tFirstName,
      lastName: tLastName,
      age: tAge,
      gender: tGender,
      mobile: tMobile,
    };
    axios.put("http://localhost:8080/tenant/update", payload).then((resp) => {
      alert("Tenant Updated");
      navigate("/tenant/all");
    });
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            src={updatepic}
            alt="update img"
            className="d-block w-100 h-100"
          />
        </div>

        <div
          class="col-md-6 shadow-lg pb-5"
          style={{ backgroundColor: "rgba(245,245,245)" }}
        >
        
          <p
            class="text-center font-weight-bold text-black-50"
            style={{ fontSize: "x-large" }}
          >
            {" "}
            Update
          </p>

          <div className="form-group">
            <label htmlfor="username" class="form-label select-label mt-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              onChange={(event) => setTUserName(event.target.value)}
              value={tUsername}
            />
          </div>
          <div className="form-group">
            <label htmlfor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              onChange={(event) => setTPassword(event.target.value)}
              value={tPassword}
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              onChange={(event) => setTEmail(event.target.value)}
              value={tEmail}
            />
          </div>

          <div className="form-group">
            <label htmlfor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              class="form-control"
              onChange={(event) => setTFirstName(event.target.value)}
              value={tFirstName}
            />
          </div>

          <div className="form-group">
            <label htmlfor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              class="form-control"
              onChange={(event) => setTLastName(event.target.value)}
              value={tLastName}
            />
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              class="form-control"
              onChange={(event) => setTAge(event.target.value)}
              value={tAge}
            />
          </div>

          <div class="form-group">
            <div class="mb-1">Gender</div>
            <div class="form-check-inline">
              <label class="form-check-label" for="radio1">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radio1"
                  name="optradio"
                  value="female"
                  checked={tGender === "female"}
                  onClick={(event) => setTGender(event.target.value)}
                />
                Female
              </label>
            </div>

            <div class="form-check-inline">
              <label class="form-check-label" for="radio2">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radio2"
                  name="optradio"
                  value="male"
                  checked={tGender === "male"}
                  onClick={(event) => setTGender(event.target.value)}
                />
                Male
              </label>
            </div>

            <div class="form-check-inline">
              <label class="form-check-label" for="radio3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="radio3"
                  name="optradio"
                  value="other"
                  checked={tGender === "other"}
                  onClick={(event) => setTGender(event.target.value)}
                />
                Other
              </label>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="mobile">
              Phone Number
            </label>
            <input
              type="tel"
              id="mobile"
              class="form-control"
              onChange={(event) => setTMobile(event.target.value)}
              value={tMobile}
            />
          </div>
          <div>
            <button onClick={handleSubmit} className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateTenant;


