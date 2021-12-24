import React, { Fragment } from "react";
import Header from "../../templates/HomeTemplate/Layout/Header/Header";
import { isAuthenticated } from "../../auth/index";
import moment from "moment";
import Footer from "../../templates/HomeTemplate/Layout/Footer/Footer";
import { NavLink } from "react-router-dom";

export default function ThongTinCaNhan() {
  // const {
  //   user: { _id, name, email, role, dob, address, phoneNumber },
  // } = isAuthenticated();

  const {
    name,
    email,
    password,
    phone,
    birthday,
    gender,
    address,
    type,
    avatar,
  } = isAuthenticated();

  console.log(name, email, password, phone, birthday, gender, address, type);
  console.log(isAuthenticated());

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin User</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink className="nav-link" to="/user/capnhatnguoidung">
              Cập nhật thông tin
            </NavLink>
          </li>

          {/* {type && type !== "CLIENT" && ( */}
          <li className="list-group-item">
            <NavLink className="nav-link" to="/getlistuser">
              Người dùng quản lý
            </NavLink>
          </li>
          {/* )} */}
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Thông tin cá nhân</h3>
        <ul className="list-group">
          <li className="list-group-item">Tên :{name} </li>
          <li className="list-group-item">Email :{email} </li>
          {
            <li className="list-group-item">
              Ngày sinh : {moment(birthday).format("DD/MM/YYYY")}
            </li>
          }
          {<li className="list-group-item">Địa chỉ :{address} </li>}
          {<li className="list-group-item">Số điện thoại :{phone} </li>}
        </ul>
      </div>
    );
  };

  const userAvatar = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Ảnh đại diện</h3>
        <img
          style={{ height: "250px", width: "auto" }}
          className="img-thumbnail rounded border border-primary"
          src={avatar}
          alt=""
        />
      </div>
    );
  };

  return (
    <Fragment>
      {/* <Header className="mb-5" /> */}

      <div title="Dashboard" description={`G'day `} className="container ">
        <div className="row">
          <div className="col-4">
            {userAvatar()}
            {adminLinks()}
          </div>
          <div className="col-8">{adminInfo()}</div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
