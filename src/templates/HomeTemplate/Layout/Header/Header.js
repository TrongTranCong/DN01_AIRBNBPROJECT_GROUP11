import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLocationAction } from "../../../../redux/actions/QuanLyViTriActions";
import { isAuthenticated, signout } from "../../../../auth";
import { history } from "../../../../App";
//antd
import { DatePicker, Space } from "antd";
import moment from "moment";
import { useFormik } from "formik";
export default function Header(props) {
  const { arrLocations } = useSelector((state) => state.QuanLyViTriReducer);
  // console.log(`arrLocations`, arrLocations)
  //lấy thông tin users
  const formik = useFormik({
    initialValues: {
      location: "",
      checkIn: "",
      checkOut: "",
      guests: "",
    },
    onSubmit: (values) => {
      console.log(`values`, values);
    }
  });

  const handleClickSearch = () => {
    if (location === "") {
      alert("Vui lòng chọn địa điểm");
      return false;
    }
    //gửi lên reducer
    const action = {
      type: "GET_INFO_SEARCH",
      payload: formik.values,
    };
    // console.log(`action`, action)
    dispatch(action);
    history.push(`/danhsachphong?location=${location}`, formik.values);
  };

  const handleChangeDateIn = (date) => {
    let checkIn = moment(date).format("DD/MM/YYYY");
    console.log(`checkIn`, checkIn);
    //fill value vào formik
    formik.setFieldValue("checkIn", checkIn);
  };
  const handleChangeDateOut = (date) => {
    let checkOut = moment(date).format("DD/MM/YYYY");
    console.log(`checkOut`, checkOut);
    //fill value vào formik
    formik.setFieldValue("checkOut", checkOut);
  };

  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationAction());
  }, [dispatch]);

  const handleChange = (e) => {
    let inputVal = e.target.value.trim();
    let suggest = [];
    if (inputVal.length > 0) {
      suggest = arrLocations.filter((loc) => {
        const regexString = new RegExp(`${inputVal}`, "gi");
        return loc?.province?.toLowerCase()?.match(regexString);
      });
    }
    setSuggestions(suggest);
    setLocation(inputVal);
  };
  const handleSuggest = (location) => {
    setLocation(location);
    setSuggestions([]);
    formik.setFieldValue("location", location);
  };
  const history = useHistory();

  //   // history.push(`/danhsachphong?location=${location}`);
  // };
  //Sticky menu
  // useEffect(() => {
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // });

  //Method that will fix header after a specific scrollable
  // const isSticky = () => {
  //   const nav = document.querySelector("nav");
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 100
  // ? nav.classList.add("is-sticky")
  //     : nav.classList.remove("is-sticky");
  // };

  //Scrolling
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  });
  const handleOnScroll = (e) => {
    // let searchMain = document.querySelector("form");
    let navbar = document.querySelector("nav");
    let winScroll = window.scrollY;

    if (winScroll >= 100) {
      scroll && setScroll(false) && { navbar }.hide();
    } else {
      setScroll(true);
    }
  };

  return (
    <header className="px-0">
      {scroll && (
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ padding: "0 5rem" }}
        >
          <a className="navbar-brand" href="/">
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
                <a className="nav-link" href="#">
                  Trải nghiệm
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Trải nghiệm trực tuyến
                </a>
              </li>

              <li>
                <div className=" dropdown active  ">
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
                </div>
              </li>
            </ul>
          </div>

          <div className="guests d-flex align-items-center">
            {/* <div className="mx-3">
              <div
                href="#"
                style={{
                  borderRadius: "1.25rem",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <i class="fa fa-globe"></i>
              </div>
            </div> */}
          </div>
        </nav>
      )}

      <div className="mt-2">
        <form className="search-blog my-0 p-0" onSubmit={formik.handleSubmit}>
          <div className="d-flex mx-0 font-weight-bold">
            <div className="col-3">
              <label className="mt-2" style={{ marginLeft: "15px" }}>
                Địa điểm
              </label>
              <input
                // autoComplete="off"
                type="search"
                className="form-control border-0 p-0"
                style={{
                  width: "80%",
                  marginTop: -7,
                  marginLeft: 15,
                  fontSize: 14,
                  backgroundColor: "transparent",
                }}
                // id="location"
                placeholder="Bạn sắp đi đâu?"
                onChange={handleChange}
                value={location}
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
                          className="list-group-item font-weight-lighter border-0 suggestion"
                          style={{
                            width: "300px",
                            fontSize: "18px",
                          }}
                          key={index}
                          onClick={() => {
                            handleSuggest(item.province);
                          }}
                        >
                          <span className="px-2">
                            <i className="fa fa-map-marker-alt"></i>
                          </span>
                          <span className="suggestion-highlighted">
                            {item.province},{item.country}
                          </span>
                        </li>
                      </>
                    );
                  })}
              </div>
            </div>

            <div className="col-3 ">
              <label className="mt-2 ">Nhận phòng</label>
              {/* <input
                type="date"
                name="checkIn"
                className="form-control border-0 p-0"
                style={{
                  width: "70%",
                  marginTop: "-15px",
                }}
                id="CheckIn"
                onChange={handleChangeSearch}
                // value={checkIn}
              /> */}
              <Space direction="vertical">
                <DatePicker
                  style={{
                    paddingTop: 0,
                    paddingRight: 11,
                    paddingLeft: 0,
                    paddingBottom: 4,
                    background: 0,
                    border: 0,
                  }}
                  name="checkIn"
                  onChange={handleChangeDateIn}
                  format="DD-MM-YYYY"
                />
              </Space>
            </div>
            <div className="col-3 ">
              <label className="mt-2 ">Trả phòng</label>
              {/* <input
                type="date"
                name="checkOut"
                id="CheckOut"
                className="form-control border-0 p-0 h-0 "
                style={{ width: "70%", marginTop: "-15px" }}
                onChange={handleChangeSearch}
                // value={checkOut}
              /> */}
              <Space direction="vertical">
                <DatePicker
                  style={{
                    paddingTop: 0,
                    paddingRight: 11,
                    paddingLeft: 0,
                    paddingBottom: 4,
                    background: 0,
                    border: 0,
                  }}
                  onChange={handleChangeDateOut}
                  format="DD-MM-YYYY"
                />
              </Space>
            </div>
            <div className="col-3 ">
              <div className="row">
                <div className="col-8">
                  <label className="mt-2">Khách</label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="form-control border-0 p-0 h-0"
                    style={{ width: "100%", marginTop: -7, fontSize: 14 }}
                    name="guests"
                    placeholder="Thêm khách"
                    onChange={formik.handleChange}
                    // value={guests}
                  />
                  <button className="clearInput" type="reset">
                    &times;
                  </button>
                  {/* <Space>
                    <InputNumber 
                      style={{}}
                      min={1}
                      max={10}
                      value={guests}
                      onChange={setGuests}
                    />
                    <Button
                      
                      type="primary"
                      onClick={() => {
                        setGuests(2);
                      }}
                    >
                      &times;
                    </Button>
                  </Space> */}
                </div>
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn-danger"
                    onClick={handleClickSearch}
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: 7,
                      borderRadius: 50,
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: 3,
                        paddingTop: 3,
                        fontSize: 16,
                        color: "#fff",
                      }}
                    >
                      <i className="fa fa-search"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}
