import React from "react";
import "./Register.css";
import sigupImage from "../../assets/signup-image.jpeg";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { DangKyAction } from "../../redux/actions/UserRegisterAction";
import { NavLink } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      address: "",
      type: "CLIENT",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("tên"),
    }),
    onSubmit: (values) => {
      dispatch(DangKyAction(values));
      console.log(values.type);
    },
  });

  const handleCloseRegister = () => {
    history.push("/");
  };
  return (
    <div className="register py-3 bg-light">
      <div className="container">
        <div className="row content no-gutters">
          <div className="col-lg-5 register-col-left">
            <img src={sigupImage} className=" img-fluid" alt="register-img" />
          </div>
          <div className="col-lg-7 register-col-right text-center ">
            {/* text-center */}
            <div>
              <div className="modal-header">
                <div className="space"></div>
                <span className="register-logo fab fa-airbnb">
                  <b>airbnb</b>
                </span>
                <div className="register-close">
                  <button
                    type="button"
                    className="close "
                    onClick={handleCloseRegister}
                  >
                    <span className="close-icon" aria-hidden="false">
                      ×
                    </span>
                    <span className="overlay-close"></span>
                  </button>
                </div>
              </div>
              <h3 className="title-register">Đăng kí tài khoản airbnb</h3>
              <form className="form-register" onSubmit={formik.handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <input
                      type="text"
                      className="input-register  "
                      placeholder="Họ tên"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      className="input-register "
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      className="input-register"
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="number"
                      className="input-register"
                      placeholder="Số điện thoại"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      className="input-register "
                      placeholder="Ngày sinh"
                      name="birthday"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      className="input-register "
                      placeholder="Địa chỉ"
                      name="address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="gender">
                  <span style={{ color: "#721919" }} className="gender-title">
                    Giới tính
                    <i
                      style={{ color: "#721919" }}
                      className="fas fa-question-circle ml-1"
                    ></i>
                  </span>
                  <div className="category">
                    <label className="gender-detail">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="true"
                        checked
                        onChange={formik.handleChange}
                      />
                      <span className="gender-otp">Nam</span>
                    </label>
                    <label className="gender-detail">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="false"
                        onChange={formik.handleChange}
                      />
                      <span className="gender-otp">Nữ</span>
                    </label>
                  </div>
                </div>
                <button type="submit" className="button-register">
                  Đăng ký
                </button>
                <div className="option">Hoặc</div>
              </form>
              <div className="fblink">
                <p className="loginwith">Đăng ký với</p>
                <a href="">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fab fa-google"></i>
                </a>
                <a href="">
                  <i className="fab fa-apple"></i>
                </a>
              </div>
              <div className="alreadyacc">
                <p className="haveacc">
                  Bạn đã có tài khoản?
                  <NavLink className="loginlink" to="/loginpage">
                    Đăng nhập
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <form className="form-register" onSubmit={formik.handleSubmit}>
                <div className="register-col1 row">
                  <input
                    type="text"
                    className="input-register col-12 col-md-5 "
                    placeholder="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div>{formik.errors.name}</div>
                  )}
                  <input
                    type="email"
                    className="input-register col-12 col-md-5 "
                    placeholder="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="register-col2 row">
                  <input
                    type="password"
                    className="input-register col-12 col-md-5"
                    placeholder="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <input
                    type="number"
                    className="input-register col-12 col-md-5"
                    placeholder="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="register-col3 row">
                  <input
                    type="text"
                    className="input-register col-12 col-md-5"
                    placeholder="birthday"
                    name="birthday"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <input
                    type="text"
                    className="input-register col-12 col-md-5"
                    placeholder="address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="regiser-col4 row">
                  <input
                    name="gender"
                    type="radio"
                    value="true"
                    onChange={formik.handleChange}
                  />
                  Nam
                  <input
                    name="gender"
                    type="radio"
                    value="false"
                    onChange={formik.handleChange}
                  />
                  Nữ
                  <input
                    name="gender"
                    type="radio"
                    value="0"
                    onChange={formik.handleChange}
                  />
                  Khác
                </div>
                <button type="submit" className="button-register">
                  Đăng ký
                </button>
                <div className="option">Hoặc</div>
              </form> */
}
