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
      taiKhoan: "",
      matKhau: "",
      nhapLaiMatKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("tài khoản không được để trống"),
      matKhau: Yup.string()
        .required("mật khẩu không được để trống")
        .min(6, "mật khẩu tối đa 6 ký tự")
        .max(60, "mật khẩu tối đa 60 ký tự"),
      nhapLaiMatKhau: Yup.string().required("mật khẩu được để trống"),
      hoTen: Yup.string().required("họ tên không được để trống"),
      email: Yup.string()
        .required("Email không được để trống")
        .email("email không đúng định dạng"),
      soDT: Yup.string()
        .required("số điện thoại không được để trống")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "số điện thoại không đúng định dạng"
        ),
    }),
    onSubmit: (values) => {
      // chay ok rô do tưét thửu xem da
      dispatch(DangKyAction(values));
      // console.log(values);
    },
  });

  const handleCloseRegister = () => {
    history.push("/");
  };
  return (
    <div className="register py-2 bg-light">
      <div className="container">
        <div className="row content no-gutters">
          <div className="col-lg-5">
            <img src={sigupImage} className=" img-fluid" alt="register-img" />
          </div>
          <div className="col-lg-7 text-center">
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
                <div className="register-col1 row">
                  <input
                    type="text"
                    className="input-register col-12 col-md-5 "
                    placeholder="Tài khoản"
                    id="taiKhoan"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                    <div>{formik.errors.taiKhoan}</div>
                  )}
                  <input
                    type="password"
                    className="input-register col-12 col-md-5 "
                    placeholder="Mật khẩu"
                    id="matKhau"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.matKhau && formik.errors.matKhau && (
                    <div>{formik.errors.matKhau}</div>
                  )}
                </div>
                <div className="register-col2 row">
                  <input
                    type="password"
                    className="input-register col-12 col-md-5"
                    placeholder="Nhập lại mật khẩu"
                    id="nhapLaiMatKhau"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.nhapLaiMatKhau &&
                    formik.errors.nhapLaiMatKhau && (
                      <div>{formik.errors.nhapLaiMatKhau}</div>
                    )}
                  <input
                    type="text"
                    className="input-register col-12 col-md-5"
                    placeholder="Họ tên"
                    id="hoTen"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  ,
                  {formik.touched.hoTen && formik.errors.hoTen && (
                    <div>{formik.errors.hoTen}</div>
                  )}
                </div>
                <div className="register-col3 row">
                  <input
                    type="text"
                    className="input-register col-12 col-md-5"
                    placeholder="Email"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                  )}
                  <input
                    type="text"
                    className="input-register col-12 col-md-5"
                    placeholder="Số điện thoại"
                    id="soDT"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.soDT && formik.errors.soDT && (
                    <div>{formik.errors.soDT}</div>
                  )}
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
