import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLocationAction } from "../../../../redux/actions/QuanLyViTriActions";

import { isAuthenticated, signout } from "../../../../auth";

export default function Header(props) {
  // const [locations, setLocations] = useState([]);
  const { arrLocations } = useSelector((state) => state.QuanLyViTriReducer);
  // console.log(`arrLocations`, arrLocations);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // console.log(isAuthenticated());
  const dispatch = useDispatch();
  useEffect(() => {
    // const action = getLocationAction;
    dispatch(getLocationAction);
  }, []);
  const handleChange = (value) => {
    let matches = [];
    if (value.length > 0) {
      matches = arrLocations.filter((loc) => {
        const regexString = new RegExp(`${value}`, "gi");
        return loc.name.match(regexString);
      });
    }
    console.log(`matches`, matches);
    setSuggestions(matches);
    setValue(value);
  };

  //Sticky menu
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  //Method that will fix header after a specific scrollable
  const isSticky = (e) => {
    const nav = document.querySelector("nav");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? nav.classList.add("is-sticky")
      : nav.classList.remove("is-sticky");
  };
  return (
    <header className="px-0">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ padding: "0 5rem" }}
      >
        <a className="navbar-brand" href="#">
          <div className="row mx-0 align-items-center">
            <div>
              <i className="fab fa-airbnb" style={{ fontSize: "1.8rem" }}></i>
            </div>
            <div className="pl-1 font-weight-bold">airbnb</div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-danger">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Nơi ở <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#">
                Trải nghiệm
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#">
                Trải nghiệm trực tuyến
              </a>
            </li>
          </ul>
        </div>
        <div
          className="d-flex align-items-center"
          style={{ listStyle: "none" }}
        >
          <div>
            <a
              className="text-light"
              href="#"
              style={{ borderRadius: "1.25rem", cursor: "pointer" }}
            >
              Đón tiếp khách
            </a>
          </div>
          <a
            className="btn text-light"
            href="#"
            style={{ borderRadius: "1.25rem" }}
          >
            <i className="fa fa-globe"></i>
          </a>
          <div>
            <li className=" dropdown active ">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div
                  className="row align-content-center login"
                  style={{ borderRadius: "1.25rem" }}
                >
                  <i className="fa fa-bars mx-3"></i>
                  {isAuthenticated() ? (
                    <div>
                      <img
                        style={({ height: "25px" }, { width: "25px" })}
                        src={isAuthenticated().avatar}
                        alt=""
                      />
                      <span>{isAuthenticated().name}</span>
                    </div>
                  ) : (
                    <i className="fa fa-user-circle"></i>
                  )}
                  {/* */}
                </div>
              </a>
              <div
                className="dropdown-menu"
                style={{ left: "-65px" }}
                aria-labelledby="navbarDropdown"
              >
                {isAuthenticated() ? (
                  <>
                    <NavLink className="dropdown-item" to="/user/dashboard">
                      Thông tin cá nhân
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      onClick={() => signout(() => {})}
                      to="/"
                    >
                      Đăng xuất
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      className="dropdown-item font-weight-bold"
                      to="/register"
                    >
                      Đăng ký
                    </NavLink>
                    <NavLink className="dropdown-item" to="/loginpage">
                      Đăng nhập
                    </NavLink>
                  </>
                )}
              </div>
            </li>
          </div>
        </div>
      </nav>
      <div className="mt-2">
        <div className="search-blog">
          <div className="d-flex mx-0 text-dark font-weight-bold">
            <div className="col-3">
              <label className="mt-2" style={{ marginLeft: "15px" }}>
                Địa điểm
              </label>
              <input
                type="text"
                className="form-control border-0 p-0"
                style={{
                  width: "80%",
                  marginTop: "-15px",
                  marginLeft: "15px",
                  backgroundColor: "transparent",
                }}
                id="exampleInputEmail1"
                placeholder="Bạn sắp đi đâu?"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                value={value}
              />
              <div
                className="mt-3"
                style={{
                  marginLeft: "-18px",
                }}
              >
                {suggestions &&
                  suggestions.map((item, index) => {
                    return (
                      <>
                        <li
                          className="list-group-item font-weight-lighter border-0"
                          style={{
                            width: "350px",
                            fontSize: "18px",
                          }}
                          key={index}
                        >
                          <span className="px-1">
                            <i className="fa fa-map-marker-alt"></i>
                          </span>
                          {item.name},{item.province},{item.country}
                        </li>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="col-3 ">
              <label className="mt-2 ">Nhận phòng</label>
              <input
                type="date"
                className="form-control border-0 p-0"
                style={{
                  width: "70%",
                  marginTop: "-15px",
                  borderStyle: "solid",
                }}
                id="exampleInputEmail1"
                placeholder="Thêm ngày"
              />
            </div>
            <div className="col-3 ">
              <label className="mt-2 ">Trả phòng</label>
              <input
                type="date"
                className="form-control border-0 p-0 h-0 "
                style={{ width: "70%", marginTop: "-15px" }}
                id="exampleInputEmail1"
                placeholder="Thêm ngày"
              />
            </div>
            <div className="col-3 ">
              <div className="row">
                <div className="col-8">
                  <label className="mt-2">Khách</label>
                  <input
                    type="number"
                    className="form-control border-0 p-0 h-0"
                    style={{ width: "100%", marginTop: "-15px" }}
                    id="exampleInputEmail1"
                    placeholder="Thêm khách"
                  />
                </div>
                <div className="col-4">
                  <button
                    className="btn-danger"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginTop: "7px",
                      borderRadius: "50px",
                      borderWidth: "0",
                    }}
                  >
                    <NavLink to="/danhsachphong">
                      <i className="fa fa-search" style={{ color: "#fff" }}></i>
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
