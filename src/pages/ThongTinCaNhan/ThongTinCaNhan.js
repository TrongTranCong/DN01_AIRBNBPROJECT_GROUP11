import React, { Fragment } from "react";
import Header from "../../templates/HomeTemplate/Layout/Header/Header";
import { isAuthenticated } from "../../auth";

export default function ThongTinCaNhan() {
  //   const {
  //     user: { _id, name, email, role, dob, address, phoneNumber },
  //   } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <button className="nav-link" to="">
              Update Profile
            </button>
          </li>
          <li className="list-group-item">
            <button className="nav-link" to="">
              User Management
            </button>
          </li>
          <li className="list-group-item">
            <button className="nav-link" to="">
              Add Medical Center
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: </li>
          <li className="list-group-item">Email: </li>
          {<li className="list-group-item">Birth Date:</li>}
          {<li className="list-group-item">Address: </li>}
          {<li className="list-group-item">Phone Number: </li>}
          {/* <li className="list-group-item">
            { === 1
              ? "Medical Staff"
              : role === 2
              ? "Medical Center"
              : role === 3
              ? "Admin"
              : "Registered User"}
          </li> */}
        </ul>
      </div>
    );
  };

  const userAvatar = () => {
    // const photoUrl =
    //   ? `${API}/user/photo/${_id}?${new Date().getTime()}`
    //   : DefaultAvatar;
    return (
      <div className="card mb-5">
        <h3 className="card-header">Avatar</h3>
        <img
          style={{ height: "250px", width: "auto" }}
          className="img-thumbnail rounded border border-primary"
          src=""
          //   onError={(i) => (i.target.src = `${DefaultAvatar}`)}
          alt=""
        />
      </div>
    );
  };

  return (
    <Fragment>
      <Header className="mb-5" />
      <div title="Dashboard" description={`G'day `} className="container ">
        <div className="row">
          <div className="col-4">
            {userAvatar()}
            {adminLinks()}
          </div>
          <div className="col-8">{adminInfo()}</div>
        </div>
      </div>
    </Fragment>
  );
}
