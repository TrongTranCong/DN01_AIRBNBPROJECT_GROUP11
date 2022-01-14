import React from "react";
import "./LoginPage.css";
import loginImage from "../../assets/login-image.jpg";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import { DangNhapAction } from "../../redux/actions/UserLoginAction";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage(props) {
  const dispatch = useDispatch();
  // console.log(props);
  const history = useHistory();

  const formik = useFormik({

    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log("values", values);
      const action = DangNhapAction({ values, callback: handleLoginSucces });
      dispatch(action);
    },
  });

  const handleCloseLogin = () => {
    history.push("/");
  };
  const handleLoginSucces = () => {
    // history.push("/");
    history.goBack();
  };

  return (
    <div className="login-page py-2 bg-light">
      <div className="container">
        <div className="row content no-gutters">
          <div className="col-lg-5 ">
            <img src={loginImage} className="img-fluid" alt="login-img" />
          </div>
          <div className="col-lg-7 text-center">
            <div>
              <div className="modal-header">
                <div className="space"></div>
                <span className="login-logo fab fa-airbnb">
                  <b>airbnb</b>
                </span>
                <div className="login-close">
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseLogin}
                  >
                    <span className="close-icon" aria-hidden="false">
                      ×
                    </span>
                    <span className="overlay-close"></span>
                  </button>
                </div>
              </div>
              <h3 className="title-login">Đăng nhập vào airbnb</h3>
              <form className="form-login" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  className="input-login"
                  placeholder="Tài khoản"
                  name="email"
                  onChange={formik.handleChange}
                />
                <input
                  type="password"
                  className="input-login"
                  placeholder="Mật khẩu"
                  name="password"
                  onChange={formik.handleChange}
                />
                <button type="submit" className="button-login">
                  Đăng nhập
                </button>

                <div className="forget-id">
                  <a href="">Quên mật khẩu?</a>
                </div>
                <div className="option">Hoặc</div>
              </form>
              <div className="fblink">
                <p className="loginwith">Đăng nhập với</p>
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
              <div className="signup">
                <p className="noacc">
                  Không có tài khoản?
                  <a className="signupbtn" href="">
                    Đăng ký
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
