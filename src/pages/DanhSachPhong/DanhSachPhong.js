import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getRoomsAction } from "../../redux/actions/DanhSachPhongActions";
//thư viện antdesign
import { HeartOutlined } from "@ant-design/icons";
export default function DanhSachPhong(props) {
  const { arrDanhSachPhong } = useSelector(
    (state) => state.DanhSachPhongReducer
  );
  // console.log(`arrDanhSachPhong`, arrDanhSachPhong);
  const dispatch = useDispatch();

  useEffect(async () => {
    const action = getRoomsAction;
    dispatch(action);
  }, []);
  const renderDanhSachPhong = () => {
    return arrDanhSachPhong.map((item, index) => {
      return (
        <>
          <div className="col-md-6 py-3 border-bottom" key={index}>
            <img
              className="img-fluid"
              style={{ borderRadius: "15px" }}
              src={item.image}
              alt="No image available"
            />
          </div>
          <div className="col-md-6 border-bottom">
            <div className="card-body" style={{ padding: "0.25rem 1rem" }}>
              <HeartOutlined style={{ cursor: "pointer" }} />
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Khách: {item.guests} , Phòng ngủ: {item.bedRoom}
              </p>
              <p className="card-text font-weight-bold">
                Giá:{item.price} $/đêm
              </p>
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
            <a className="navbar-brand" href="#">
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
      <div className="row my-5">
        <div className="col-7">
          <h3 className="mx-3">Chỗ ở khu vực bạn đã chọn</h3>
          <div className="container">
            <div className="card mb-3">
              <div className="row no-gutters">{renderDanhSachPhong()}</div>
            </div>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
}
