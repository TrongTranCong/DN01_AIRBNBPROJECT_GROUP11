import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { getRoomsAction } from "../../redux/actions/DanhSachPhongActions";
//thư viện antdesign
import { HeartOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
export default function DanhSachPhong(props) {
  const { arrDanhSachPhong } = useSelector(
    (state) => state.DanhSachPhongReducer
  );
  // const locationSearch = arrDanhSachPhong.filter((loc) => {
  //   return loc.locationId != null;
  // });
  // console.log(`locationSearch`, locationSearch);

  const search = useLocation().search;
  const location = new URLSearchParams(search).get("location");

  const count = arrDanhSachPhong.filter(
    (loc) => loc.locationId != null && loc.locationId.province === location
  ).length;
  console.log(`count`, count);
  const dispatch = useDispatch();

  useEffect(async () => {
    const action = getRoomsAction;
    dispatch(action);
  }, []);
  const renderDanhSachPhong = () => {
    return arrDanhSachPhong
      .filter(
        (item) =>
          item.locationId != null && item.locationId.province == location
      )
      .map((room, index) => {
        return (
          <>
            <div className="col-md-6 py-3 border-bottom" key={index}>
              <img
                className="w-100"
                style={{ borderRadius: "15px" }}
                src={room.image}
                alt={room.name}
              />
            </div>
            <div className="row col-md-6 border-bottom">
              <div className="col-9 mt-2">
                <div className="card-body" style={{ padding: "0.25rem 1rem" }}>
                  <h5 className="card-title">
                    <NavLink to={`/chitietphong/${room._id}`}>{room.name}</NavLink>
                  </h5>
                  <p className="card-text border-top">
                    {room.guests} khách -{room.bedRoom} giường ngủ - {room.bath}{" "}
                    phòng tắm{room.wifi ? "- Wifi" : ""}
                    {room.kitchen ? "- Bếp" : ""}
                    {room.dryer ? "- Máy sấy" : ""}
                  </p>

                  <p
                    className="card-text font-weight-bold"
                    style={{
                      marginLeft: "68px",
                      marginTop: "157px",
                      fontSize: "20px",
                    }}
                  >
                    {room.price} $/đêm
                  </p>
                </div>
              </div>
              <div className="col-3 mt-2">
                <HeartOutlined
                  style={{ cursor: "pointer", fontSize: "20px" }}
                />
              </div>
            </div>
          </>
        );
      });
  };
  return (
    <div>
      <div className="header_DSP mb-3">
        <div className="row justify-content-center px-5 py-3">
          <div className="col-3">
            <a className="navbar-brand" href="/">
              <div className="row mx-0 align-items-center">
                <div>
                  <i
                    className="fab fa-airbnb"
                    style={{
                      fontSize: "2rem",
                      color: "rgb(255, 56, 92)",
                    }}
                  ></i>
                </div>
                <div
                  className="pl-1 font-weight-normal"
                  style={{
                    fontSize: "2rem",
                    color: "rgb(255, 56, 92)",
                  }}
                >
                  airbnb
                </div>
              </div>
            </a>
          </div>
          <div className=" nav_DSP col-6">
            <div
              className="d-flex text-center"
              style={{
                alignItems: "center",
                padding: "0.5rem 0",
              }}
            >
              <div className="col-5">
                <input
                  className="form-control text-center"
                  style={{ border: "transparent" }}
                  type="text"
                  placeholder="Khu vực bạn đã chọn"
                  value={location}
                />
              </div>
              <div className="col-3 border-left">
                <input
                  className="form-control text-center"
                  style={{ border: "transparent" }}
                  type="text"
                  placeholder="Thêm ngày"
                />
              </div>
              <div className="col-3 border-left">
                <input
                  className="form-control text-center"
                  style={{ border: "transparent" }}
                  type="text"
                  placeholder="Thêm khách"
                />
              </div>
              <div className="col-1">
                <div
                  className
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50px",
                    backgroundColor: "#FF385C",
                    textAlign: "center",
                    color: "white",
                    lineHeight: "32px",
                    marginLeft: "-5px",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-around col-3">
            <div>Trở thành chủ nhà</div>
            <div className="mx-4">
              <i class="fa fa-globe"></i>
            </div>
            <div>
              <i className="fa fa-bars mx-3"></i>
              <i className="fa fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-7">
          <h5 style={{ fontWeight: "lighter", marginLeft: "15px" }}>
            Có {count} chỗ bạn chọn tại {location}
          </h5>
          <h3 className="mx-3">Chỗ ở khu vực bạn đã chọn</h3>
          <div className="container">
            <div className="card mb-3 border-0">
              <div className="row no-gutters">{renderDanhSachPhong()}</div>
              <Pagination
                className="text-center mt-4"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </div>
        </div>
        <div className="col-5">googlemap</div>
      </div>
    </div>
  );
}
