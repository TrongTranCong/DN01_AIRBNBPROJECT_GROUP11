import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetailRoomsAction } from "../../redux/actions/DanhSachPhongActions";
//thư viện antdesign
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { Card } from "antd";

export default function ChiTietPhong(props) {
  // console.log(`props`, props)
  const { chiTietPhong } = useSelector((state) => state.DanhSachPhongReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let maPhong = props.match.params.id;
    const action = getDetailRoomsAction(maPhong);
    dispatch(action);
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="border-top" style={{ textTransform: "uppercase" }}>
        {chiTietPhong.name}
      </h3>
      <Rate style={{ color: "hotpink" }} />
      <p style={{ display: "inline-block" }}> 4,83 (18 đánh giá)</p>

      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid"
            src={chiTietPhong?.locationId?.image}
            alt=""
          />
        </div>

        <div className="col-3">
          <img className="img-fluid" src={chiTietPhong.image} alt="" />
        </div>
        <div className="col-3">
          <img className="img-fluid" src={chiTietPhong.image} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <Card
            title={chiTietPhong.name}
            extra={
              <a href="#">
                {chiTietPhong?.locationId?.name},
                {chiTietPhong?.locationId?.province},
                {chiTietPhong?.locationId?.country}
              </a>
            }
            style={{ marginTop: 30 }}
          >
            <p>
              <i class="fa fa-hotel"></i>
              Toàn bộ phòng
            </p>
            <p>
              <i class="fa fa-sun"></i>
              Vệ sinh tăng cường
            </p>
            <p>
              <i class="fa fa-sun"></i>
              Khách sạn siêu cấp
            </p>
            <h4 className="border-top py-3">Tiện nghi</h4>
            <div className="row">
              <div className="col-6">
                <p>
                  {chiTietPhong.wifi ? (
                    <i class="fa fa-person-booth"> Elevator</i>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {chiTietPhong.pool ? (
                    <i class="fa fa-swimming-pool"> Pool </i>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {chiTietPhong.bath ? <i class="fa fa-bath"> Bathroom</i> : ""}
                </p>
                <p>
                  {chiTietPhong.gym ? <i class="fa fa-dumbbell"> Gym</i> : ""}
                </p>
              </div>
              <div className="col-6">
                <p>
                  {chiTietPhong.wifi ? <i class="fa fa-wifi"> Wifi </i> : ""}
                </p>
                <p>
                  {chiTietPhong.hotTub ? (
                    <i class="fa fa-hot-tub"> Hot-tub</i>
                  ) : (
                    ""
                  )}
                </p>
                <p>
                  {chiTietPhong.cableTV ? (
                    <i class="fa fa-tv"> Cable TV</i>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
            <div className="border-top py-3">
              <h4>Đánh giá</h4>
              <p>{chiTietPhong.description}</p>
            </div>
          </Card>
        </div>
        <div className="col-4">
          <p>{chiTietPhong.price} VNĐ/đêm</p>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputNhanPhong">Nhận phòng</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputNhanPhong"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputTraPhong">Trả phòng</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputTraPhong"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Khách</label>
              <input type="number" className="form-control" id="inputAddress" />
            </div>

            <button type="submit" className="btn btn-danger">
              Đặt phòng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
