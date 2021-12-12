import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetailRoomsAction } from "../../redux/actions/DanhSachPhongActions";
//thư viện antdesign
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function ChiTietPhong(props) {
  // console.log(`props`, props)
  const { chiTietPhong } = useSelector((state) => state.DanhSachPhongReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let maPhong = props.match.params.id;
    const action = getDetailRoomsAction(maPhong);
    dispatch(action);
  },[]);

  return (
    <div className="container mt-5">
      <h3 className="border-top" style={{ textTransform: "uppercase" }}>
        {chiTietPhong.name}
      </h3>
      <StarOutlined style={{ color: "hotpink" }} />
      <p style={{ display: "inline-block" }}> 4,83 (18 đánh giá)</p>
      {/* <a href="#" style={{ display: "inline-block", marginLeft: "5px", color:'#000' }} >
        {chiTietPhong.name},{chiTietPhong.locationId.province},
        {chiTietPhong.locationId.country}
      </a> */}
      {/* <div className="row">
        <div className="col-6">
          <img
            className="img-fluid"
            src={chiTietPhong.locationId.image}
            alt=""
          />
        </div>

        <div className="col-3">
          <img className="img-fluid" src={chiTietPhong.image} alt="" />
        </div>
        <div className="col-3">
          <img className="img-fluid" src={chiTietPhong.image} alt="" />
        </div>
      </div> */}
      {/* <div className="row">

        <div className="col-7 border-bottom ">
          <div>
            <h5>{chiTietPhong.locationId.name}</h5>
            <p>
              {chiTietPhong.guests} khách - {chiTietPhong.bedRoom} giường -
              {chiTietPhong.bath} phòng tắm
            </p>
          </div>
          <div style={{ marginLeft: "500px" }}>
            <Avatar
              src="https://picsum.photos/id/237/200/300"
              size={64}
              icon={<UserOutlined />}
            />
          </div>
        </div>

        <div className="col-5"></div>
      </div> */}
    </div>
  );
}
