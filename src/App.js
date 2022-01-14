import "./App.css";
//cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DanhSachPhong from "./pages/DanhSachPhong/DanhSachPhong";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import ChiTietPhong from "./pages/ChiTietPhong/ChiTietPhong";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Dashboard from "./pages/ThongTinPhong/ThongTinPhong";
import Payment from "./pages/Payment/Payment";
import Register from "./pages/Register/Register";
import LoginPage from "./pages/Login/LoginPage";
import ThongTinCaNhan from "./pages/ThongTinCaNhan/ThongTinCaNhan";
import PrivateRoute from "./auth/PrivateRoute";
import CapNhatNguoiDung from "./pages/ThongTinCaNhan/CapNhatNguoiDung";
import DanhSachNguoiDung from "./pages/DanhSachNguoiDung/DanhSachNguoiDung";
import ThongTinPhong from "./pages/ThongTinPhong/ThongTinPhong";
import ThemPhong from "./pages/ThongTinPhong/ThemPhong/ThemPhong";
import UpdateRoom from "./pages/UpdateRoom/UpdateRoom";
import { createBrowserHistory } from "history";
import Complete from "./components/AutoComplete/AutoComplete";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/danhsachphong" component={DanhSachPhong} />
        <HomeTemplate exact path="/chitietphong/:id" component={ChiTietPhong} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/loginpage" component={LoginPage} />
        {/* <AdminTemplate
          exact
          path="/admin/thongtinphong"
          component={Dashboard}
        /> */}
        <Route exact path="/thanhtoan" component={Payment} />
        {/* <Route exact path="/autocomplete" component={Complete} /> */}
        <PrivateRoute exact path="/user/dashboard" component={ThongTinCaNhan} />
        <PrivateRoute
          exact
          path="/user/capnhatnguoidung"
          component={CapNhatNguoiDung}
        />
        <PrivateRoute exact path="/getlistuser" component={DanhSachNguoiDung} />
        <PrivateRoute exact path="/thongtinphong" component={ThongTinPhong} />
        <PrivateRoute
          exact
          path="/thongtinphong/themphong"
          component={ThemPhong}
        />
        <PrivateRoute
          exact
          path="/thongtinphong/updateroom/:id"
          component={UpdateRoom}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
