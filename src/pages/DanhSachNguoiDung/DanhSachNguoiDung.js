import React from "react";

import { useEffect, useState } from "react";
import { getListUser } from "../../redux/actions/DanhSachNguoiDungAction";

import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import "./DanhSachNguoiDung.css";
import "./Modal.css";

import { capNhatNguoiDung } from "../../redux/actions/CapNhatNguoiDungAction";
import { isAuthenticated } from "../../auth/index";
import { XoaNguoiDung } from "../../redux/actions/XoaNguoiDungAction";

export default function DanhSachNguoiDung() {
  const { listUser } = useSelector((state) => state.DanhSachNguoiDungReducer);
  console.log(`listUser`, listUser);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(-1);
  const [values, setValues] = useState({
    name: "",
    gender: "",
    email: "",
    birthday: "",
    address: "",
    phone: "",
    id: "",
  });
  const { name, gender, email, birthday, address, phone, id } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value, error: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const action = capNhatNguoiDung(values, id);
    console.log(values);
    dispatch(action);
    setIndex(-1);
    return window.location.reload();
  };

  const deleteConfirmed = (index) => {
    let answer = window.confirm("Are you sure you want to delete this user?");
    if (answer) {
      dispatch(XoaNguoiDung(listUser[index]._id));
      return window.location.reload();
    }
  };

  useEffect(() => {
    const action = getListUser();
    dispatch(action);
  }, [dispatch]);
  // console.log(values);

  useEffect(() => {
    const tempName = listUser[index] && listUser[index].name;
    const tempGender = listUser[index] && listUser[index].gender;
    const tempEmail = listUser[index] && listUser[index].email;
    const tempBirthday = listUser[index] && listUser[index].birthday;
    const tempAddress = listUser[index] && listUser[index].address;
    const tempPhone = listUser[index] && listUser[index].phone;
    const tempId = listUser[index] && listUser[index]._id;
    // console.log(JSON.stringify(tempId));
    setValues({
      ...values,
      name: tempName,
      gender: tempGender,
      email: tempEmail,
      birthday: tempBirthday,
      address: tempAddress,
      phone: tempPhone,
      id: tempId,
    });
  }, [index]);

  const renderListUser = () => {
    return listUser.map((user, index) => {
      return (
        <tr key={index}>
          <td className="font-weight-bold">{index + 1}</td>

          <td>{user.name}</td>
          <td>{user.gender === true ? "Nam" : "Nữ"}</td>
          <td>{moment(user.birthday).format("DD/MM/YYYY")}</td>

          <td>{user.email}</td>
          <td>{user.address}</td>
          <td>{user.phone}</td>
          <td className="d-flex flex-row">
            <button
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => setIndex(index)}
              className="btn btn-success mx-1"
            >
              Sửa
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => deleteConfirmed(index)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  const viewDetail = (index) => {
    if ((index) => 0) {
      return (
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="card-header">
                <h2 id="header-title">Cập nhật người dùng</h2>
              </div>
              {/* Modal Header */}

              {/* Modal body */}
              <div className="modal-body">
                <form id="form-update1" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-address-book" />
                        </span>
                      </div>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="form-control input-sm"
                        placeholder="Họ và tên"
                        onChange={handleChange("name")}
                        // onBlur={formik.handleBlur}
                        // value={listUser[index] && listUser[index].name}
                        value={name}
                      />
                      {/* {formik.touched.name && formik.errors.name && (
                        <div className="text-danger">{formik.errors.name}</div>
                      )} */}
                    </div>
                    <span className="sp-thongbao" id="tbTen" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control input-sm"
                        placeholder="Email"
                        onChange={handleChange("email")}
                        // value={listUser[index] && listUser[index].email}\
                        value={email}
                      />
                    </div>
                    <span className="sp-thongbao" id="tbEmail" />
                  </div>

                  {/* <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-key" aria-hidden="true" />
                        </span>
                      </div>
                      <input
                        onChange={handleChange("password")}
                        type="text"
                        name="password"
                        id="password"
                        className="form-control input-sm"
                        placeholder="Mật khẩu"
                        // value={listUser[index] && listUser[index].address}
                        value={Password}
                      />
                    </div>
                    <span className="sp-thongbao" id="tbPass" />
                  </div> */}

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-calendar" />
                        </span>
                      </div>
                      <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        className="form-control textbox-n"
                        onChange={handleChange("birthday")}
                        placeholder="Ngày sinh : "
                        value={moment(birthday).format("YYYY-MM-DD")}
                      />
                    </div>
                    <span className="sp-thongbao" id="tbNgay" />
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-venus-mars" />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        className="form-control "
                        onChange={handleChange("gender")}
                        placeholder="Giới tinh"
                        value={gender === true ? "Nam" : "Nữ"}
                      />
                    </div>
                    <span className="sp-thongbao" id="tbNgay" />
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i
                            className="fa fa-map-marked-alt"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <input
                        onChange={handleChange("address")}
                        type="text"
                        name="address"
                        id="address"
                        className="form-control input-sm"
                        placeholder="Địa chỉ"
                        // value={listUser[index] && listUser[index].address}
                        value={address}
                      />
                    </div>
                    <span className="sp-thongbao" id="tbAddress" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          {/* <i className="fa fa-briefcase" /> */}
                          <i className="fa fa-phone"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={handleChange("phone")}
                        className="form-control input-sm"
                        placeholder="Số điện thoại"
                        // value={listUser[index] && listUser[index].phone}
                        value={phone}
                      />
                    </div>
                    <span className="sp-thongbao" id="tbPhone" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user-tag"></i>
                        </span>
                      </div>
                      <select className="form-control" id="role">
                        <option value="0">Loại người dùng</option>
                        <option value="ADMIN">Quản trị viên</option>
                        <option value="CLIENT">Người dùng</option>
                      </select>
                    </div>
                    <span className="sp-thongbao" id="tbChucVu"></span>
                  </div>

                  <div className="modal-footer" id="modal-footer">
                    <button
                      id="btnThemNguoiDung"
                      type="button"
                      className="btn btn-success"
                      // onClick=""
                    >
                      Thêm người dùng
                    </button>
                    {/* data-dismiss="modal" */}
                    <button
                      id="btnCapNhat"
                      type="submit"
                      // onClick=""
                      className="btn btn-success"
                    >
                      Cập nhật
                    </button>
                    {/* data-dismiss="modal" */}
                    <button
                      id="btnDong"
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={() => setIndex(-1)}
                    >
                      Đóng
                    </button>
                  </div>
                </form>
              </div>
              {/* Modal footer */}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="card w-100 table_listuser"
            style={({ overflowX: "auto" }, { overflowY: "auto" })}
          >
            <h3 className="card-header">Danh sách người dùng</h3>

            <button
              className="btn btn-dark"
              // onClick={() => {
              //   resetForm();
              // }}
            >
              Thêm Người dùng
            </button>
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên</th>
                  <th>Giới tính</th>
                  <th>Ngày sinh</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Tùy chọn</th>
                </tr>
              </thead>
              <tbody>{renderListUser()}</tbody>
            </table>
          </div>
        </div>
      </div>

      {/* The Modal */}
      {/* {index} */}
      {viewDetail(index)}
    </div>
  );
}

