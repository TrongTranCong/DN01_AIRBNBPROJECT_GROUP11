import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { history } from "../../App";
import {
  getRoomsAction,
  getDetailRoomsAction,
  addRoomsAction,
  deleteRoomAction,
} from "../../redux/actions/DanhSachPhongActions";
import ReactPaginate from "react-paginate";
import Pagination from "../../util/Pagination/Pagination";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
//lib ant design
// import { Pagination } from "antd";

export default function ThongTinPhong(props) {
  // const location = useLocation();
  // console.log(`location`, location);
  // const history = useHistory();
  // console.log(`history`, history);
  const { arrDanhSachPhong } = useSelector(
    (state) => state.DanhSachPhongReducer
  );
  // console.log(`arrDanhSachPhong`, arrDanhSachPhong);
  const dispatch = useDispatch();
  const arrDanhSachPhongDefault = arrDanhSachPhong.filter(
    (item) => item.locationId != null
  );
  // console.log(`arrDanhSachPhongDefault`, arrDanhSachPhongDefault);

  
  useEffect(() => {
    dispatch(getRoomsAction());
  },[dispatch]);
  
  

  // const history=useHistory();
  const renderDanhSachPhong = () => {
    return arrDanhSachPhongDefault.map((room, index) => {
      return (
        <tr key={index}>
          <td className="font-weight-bold">#{index + 1}</td>
          <td>{room.name}</td>
          <td>
            <img className="w-25" src={room.image} alt="" />
          </td>
          <td>{room.locationId.province}</td>

          <td>{room.guests}</td>
          <td className="d-flex flex-row">
            <NavLink
              to={`/thongtinphong/updateroom/${room._id}`}
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn btn-success mx-1"
            >
              Xem
            </NavLink>
            <button
              className="btn btn-danger mx-1"
              onClick={() => {
                //Gọi action xóa
                if (window.confirm("Bạn có chắc muốn xóa phòng" + room.name)) {
                  //Gọi action
                  dispatch(deleteRoomAction(room._id));
                }
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <main role="main" className="col-lg-12 px-md-4">
            <h2>Danh Sách Thông Tin Phòng</h2>
            {/* Button trigger modal */}
            <div className="row">
              <div className="col-8">
                <NavLink
                  to="/thongtinphong/themphong"
                  id="btnThem"
                  type="button"
                  className="btn btn-warning mb-3 text-white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    history.push("/thongtinphong/themphong");
                  }}
                >
                  Thêm phòng
                </NavLink>
              </div>
              {/* <div className="col-4">
                
              </div> */}
            </div>
            <div className="table-responsive roomTable">
              <table className="table table-striped table-sm">
                <thead>
                  <tr className="bg-warning text-white">
                    <th>ID</th>
                    <th>Tên phòng</th>
                    <th>Hình ảnh</th>
                    <th>Location</th>
                    <th>GuestMax</th>
                    {/* <th>Tình Trạng</th> */}
                    <th />
                  </tr>
                </thead>
                <tbody id="tbodyFood">{renderDanhSachPhong()}</tbody>
              </table>
            </div>
          </main>
          <div className="container m-1">
            {/* {renderPagination} */}
            {/* <Pagination/> */}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thêm Phòng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="needs-validation" id="roomForm">
                <div className="row">
                  <p id="textID" />
                  <div className="col-md-6 mb-3">
                    <label htmlFor="maPhong">Mã phòng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maPhong"
                      placeholder="Nhập mã phòng"
                      required
                      // onChange={handleChangeMaPhong}
                      // value={maPhong}
                    />
                    <div id="invalidTen" className="invalid-form"></div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="tenPhong">Tên phòng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenPhong"
                      placeholder="Nhập tên phòng"
                      required
                    />
                    <div id="invalidTen" className="invalid-form"></div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="giaPhong">Giá phòng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="giaPhong"
                      placeholder="Nhập giá"
                      defaultValue
                      required
                    />
                    <div id="invalidGia" className="invalid-feedback"></div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="khuyenMai">Khuyến Mãi (%)</label>
                    <select
                      className="custom-select d-block w-100"
                      id="khuyenMai"
                      required
                    >
                      <option value>Chọn khuyến mãi</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                    </select>
                    <div id="invalidKM" className="invalid-feedback"></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-group">
                    <label htmlFor="hinhPhong">Hình ảnh</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hinhPhong"
                      placeholder="Nhập hình ảnh"
                      defaultValue
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="moTa">Mô Tả</label>
                  <textarea
                    className="form-control"
                    id="moTa"
                    rows={3}
                    defaultValue={""}
                  />
                  <div id="invalidMoTa" className="invalid-form"></div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-warning" id="btnCapNhat">
                Cập Nhật
              </button>
              <button type="button" className="btn btn-warning" id="btnThemMon">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
