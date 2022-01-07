import "./App.css";
//cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DanhSachPhong from "./pages/DanhSachPhong/DanhSachPhong";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

import Register from "./pages/Register/Register";
import LoginPage from "./pages/Login/LoginPage";
import ThongTinCaNhan from "./pages/ThongTinCaNhan/ThongTinCaNhan";
import PrivateRoute from "./auth/PrivateRoute";
// import CapNhatNguoiDung from "./pages/ThongTinCaNhan/CapNhatNguoiDung";
import DanhSachNguoiDung from "./pages/DanhSachNguoiDung/DanhSachNguoiDung";
import AdminRoute from "./auth/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/danhsachphong" component={DanhSachPhong} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/loginpage" component={LoginPage} />

        <PrivateRoute exact path="/user/dashboard" component={ThongTinCaNhan} />
        {/* <AdminRoute
          exact
          path="/user/capnhatnguoidung"
          component={CapNhatNguoiDung}
        /> */}
        <AdminRoute exact path="/getlistuser" component={DanhSachNguoiDung} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
